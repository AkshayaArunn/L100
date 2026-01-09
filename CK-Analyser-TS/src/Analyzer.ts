import { Project, ClassDeclaration, SyntaxKind, MethodDeclaration, Node } from "ts-morph";

export class CKAnalyzer {

    public analyze(project: Project) {
        project.getSourceFiles().forEach(sourceFile => {
            sourceFile.getClasses().forEach(clazz => {
                console.log("--------------------------------------------------");
                console.log(`Analyzing Class: ${clazz.getName()}`);
                console.log("--------------------------------------------------");

                try {
                    console.log(`1. WMC:  ${this.calculateWMC(clazz)}`);
                    console.log(`2. DIT:  ${this.calculateDIT(clazz)}`);
                    console.log(`3. NOC:  ${this.calculateNOC(clazz)}`);
                    console.log(`4. CBO:  ${this.calculateCBO(clazz)}`);
                    console.log(`5. RFC:  ${this.calculateRFC(clazz)}`);
                    console.log(`6. LCOM: ${this.calculateLCOM(clazz)}`);
                } catch (e) {
                    console.error("Error analyzing class:", e);
                }
                console.log();
            });
        });
    }

    // 1. WMC: Method Count
    private calculateWMC(clazz: ClassDeclaration): number {
        return clazz.getMethods().length + clazz.getConstructors().length;
    }

    // 2. DIT: Depth of Inheritance
    private calculateDIT(clazz: ClassDeclaration): number {
        let depth = 0;
        let baseClass = clazz.getBaseClass();
        while (baseClass) {
            depth++;
            baseClass = baseClass.getBaseClass();
        }
        return depth;
    }

    // 3. NOC: Number of Children
    private calculateNOC(clazz: ClassDeclaration): number {
        return clazz.getDerivedClasses().length;
    }

    // 4. CBO: Coupling Between Objects
    private calculateCBO(clazz: ClassDeclaration): number {
        const coupledTypes = new Set<string>();
        const thisClassName = clazz.getName();

        // Helper to check and add type
        const addType = (node: Node) => {
            const type = node.getType();
            const text = type.getText();
            if (text === "string" || text === "number" || text === "boolean" || text === "void" || text === "any" || text === "undefined" || text === "null") return;
            const symbol = type.getSymbol();
            if (!symbol) return;

            const typeName = symbol.getName();

            // Basic filtering for standard libs (approximate)
            const declarations = symbol.getDeclarations();
            if (declarations.length > 0) {
                const sourceFile = declarations[0].getSourceFile();
                if (sourceFile.getFilePath().includes("node_modules/typescript/lib")) return; // Standard lib
            }

            if (typeName !== thisClassName) {
                coupledTypes.add(typeName);
            }
        };

        // Fields
        clazz.getProperties().forEach(p => addType(p));

        // Methods (Params + Return)
        clazz.getMethods().forEach(m => {
            m.getParameters().forEach(p => addType(p));
            addType(m.getReturnTypeNode() || m); // Check return type
        });

        return coupledTypes.size;
    }

    // 5. RFC: Response For a Class
    // True RFC = WMC + Unique external methods called
    private calculateRFC(clazz: ClassDeclaration): number {
        const wmc = this.calculateWMC(clazz);
        const externalCalls = new Set<string>();

        clazz.getMethods().forEach(m => {
            const calls = m.getDescendantsOfKind(SyntaxKind.CallExpression);
            calls.forEach(call => {
                // Get the name of the method being called
                // This is a naive check; robust check requires symbol resolution which can be complex
                // We'll stick to a decent unique-signature approximation
                externalCalls.add(call.getText());
            });
        });

        // Note: RFC definition varies. Some say unique methods called in the system.
        // We will sum WMC + unique call expressions found.
        return wmc + externalCalls.size;
    }

    // 6. LCOM: Lack of Cohesion
    private calculateLCOM(clazz: ClassDeclaration): number {
        const methods = clazz.getMethods();
        const fields = clazz.getProperties();

        if (methods.length === 0 || fields.length === 0) return 0;

        let p = 0; // Pairs not sharing fields
        let q = 0; // Pairs sharing fields

        // Map method -> Set of field names used
        const methodUsage = new Map<MethodDeclaration, Set<string>>();

        methods.forEach(m => {
            const usedFields = new Set<string>();
            // Find all identifiers in the method body
            const identifiers = m.getDescendantsOfKind(SyntaxKind.Identifier);

            identifiers.forEach(ident => {
                const text = ident.getText();
                // Check if this identifier matches a field name
                // (More robust: check specific symbol reference, but name match is decent for simple purpose)
                if (fields.some(f => f.getName() === text)) {
                    usedFields.add(text);
                }
            });
            methodUsage.set(m, usedFields);
        });

        for (let i = 0; i < methods.length; i++) {
            for (let j = i + 1; j < methods.length; j++) {
                const usage1 = methodUsage.get(methods[i])!;
                const usage2 = methodUsage.get(methods[j])!;

                // Intersection
                let share = false;
                usage1.forEach(f => {
                    if (usage2.has(f)) share = true;
                });

                if (share) q++;
                else p++;
            }
        }

        return (p > q) ? (p - q) : 0;
    }
}

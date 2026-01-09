import { Project } from "ts-morph";
import { CKAnalyzer } from "./Analyzer";
import * as path from "path";

async function main() {
    const project = new Project();

    // Add source files to project
    // Assuming we want to scan the "sample" folder inside this project
    const samplePath = path.join(__dirname, "../sample/**/*.ts");
    console.log(`Scanning path: ${samplePath}`);

    project.addSourceFilesAtPaths(samplePath);

    const analyzer = new CKAnalyzer();
    analyzer.analyze(project);
}

main();

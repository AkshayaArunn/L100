import { Document } from "./Document";
import { DocumentStep } from "./DocumentStep";

export class DocumentPipeline {
    constructor(private steps: DocumentStep[]) { }

    process(document: Document): void {
        for (const step of this.steps) {
            step.execute(document);
        }
    }
}

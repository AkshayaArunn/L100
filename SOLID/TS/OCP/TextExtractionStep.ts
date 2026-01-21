import { Document } from "./Document";
import { DocumentStep } from "./DocumentStep";

export class TextExtractionStep implements DocumentStep {
    execute(document: Document): void {
        console.log(`Text extracted -> ${document.name}`);
    }
}

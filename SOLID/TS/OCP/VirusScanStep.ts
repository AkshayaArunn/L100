import { Document } from "./Document";
import { DocumentStep } from "./DocumentStep";

export class VirusScanStep implements DocumentStep {
    execute(document: Document): void {
        console.log(`Virus scanned -> ${document.name}`);
    }
}

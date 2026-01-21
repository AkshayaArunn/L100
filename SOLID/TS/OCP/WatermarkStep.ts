import { Document } from "./Document";
import { DocumentStep } from "./DocumentStep";

export class WatermarkStep implements DocumentStep {
    execute(document: Document): void {
        console.log(`Watermark added -> ${document.name}`);
    }
}

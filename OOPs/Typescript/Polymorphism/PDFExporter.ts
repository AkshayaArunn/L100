import { DocumentExporter } from "./DocumentExporter";

export class PDFExporter implements DocumentExporter {
    export(content: string): void {
        console.log("Exporting PDF:", content);
    }
}

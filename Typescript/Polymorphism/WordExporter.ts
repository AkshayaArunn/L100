import { DocumentExporter } from "./DocumentExporter";

export class WordExporter implements DocumentExporter {
    export(content: string): void {
        console.log("Exporting Word document:", content);
    }
}

import { DocumentExporter } from "./DocumentExporter";

export class HTMLExporter implements DocumentExporter {
    export(content: string): void {
        console.log("Exporting HTML:", content);
    }
}

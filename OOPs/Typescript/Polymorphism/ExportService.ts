import { DocumentExporter } from "./DocumentExporter";

export class ExportService {
    constructor(private exporter: DocumentExporter) {}

    exportDocument(content: string): void {
        this.exporter.export(content);
    }
}

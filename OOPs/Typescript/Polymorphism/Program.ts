import { ExportService } from "./ExportService";
import { PDFExporter } from "./PDFExporter";
import { WordExporter } from "./WordExporter";
import { HTMLExporter } from "./HTMLExporter";

const pdfService = new ExportService(new PDFExporter());
pdfService.exportDocument("OOP Notes");

const wordService = new ExportService(new WordExporter());
wordService.exportDocument("OOP Notes");

const htmlService = new ExportService(new HTMLExporter());
htmlService.exportDocument("OOP Notes");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Document_1 = require("./Document");
const DocumentPipeline_1 = require("./DocumentPipeline");
const VirusScanStep_1 = require("./VirusScanStep");
const TextExtractionStep_1 = require("./TextExtractionStep");
const WatermarkStep_1 = require("./WatermarkStep");
function main() {
    const document = new Document_1.Document("contract.pdf");
    const pipeline = new DocumentPipeline_1.DocumentPipeline([
        new VirusScanStep_1.VirusScanStep(),
        new TextExtractionStep_1.TextExtractionStep(),
        new WatermarkStep_1.WatermarkStep()
    ]);
    pipeline.process(document);
}
main();

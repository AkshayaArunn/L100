import { Document } from "./Document";
import { DocumentPipeline } from "./DocumentPipeline";
import { VirusScanStep } from "./VirusScanStep";
import { TextExtractionStep } from "./TextExtractionStep";
import { WatermarkStep } from "./WatermarkStep";

function main() {
    const document = new Document("contract.pdf");

    const pipeline = new DocumentPipeline([
        new VirusScanStep(),
        new TextExtractionStep(),
        new WatermarkStep()
    ]);

    pipeline.process(document);
}

main();

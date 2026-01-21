package OCP;
import java.util.List;
public class Main {
    public static void main(String[] args) {
        Document document = new Document("contract.pdf");
        List<DocumentStep> steps = List.of(
                new VirusScanStep(),
                new TextExtractionStep(),
                new WatermarkStep());

        DocumentPipeline pipeline = new DocumentPipeline(steps);
        pipeline.process(document);
    }
}

package OCP;

import java.util.List;

public class DocumentPipeline {

    private final List<DocumentStep> steps;

    public DocumentPipeline(List<DocumentStep> steps) {
        this.steps = steps;
    }

    public void process(Document document) {
        for (DocumentStep step : steps) {
            step.execute(document);
        }
    }
}

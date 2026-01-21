package OCP;

public class TextExtractionStep implements DocumentStep {
    public void execute(Document document) {
        System.out.println("Text extracted -> " + document.getName());
    }
}

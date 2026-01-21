package OCP;

public class WatermarkStep implements DocumentStep {
    public void execute(Document document) {
        System.out.println("Watermark added -> " + document.getName());
    }
}

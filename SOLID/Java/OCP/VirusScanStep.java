package OCP;

public class VirusScanStep implements DocumentStep {
    public void execute(Document document) {
        System.out.println("Virus scanned -> " + document.getName());
    }
}

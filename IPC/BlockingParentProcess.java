import java.io.BufferedReader;
import java.io.InputStreamReader;

public class BlockingParentProcess {
    public static void main(String[] args) throws Exception {

        Process child =new ProcessBuilder("java", "ChildProcess").start();
        BufferedReader out =new BufferedReader(new InputStreamReader(child.getInputStream()));
        new Thread(() -> {
            try {
                while (out.readLine() != null) {
                }
            } catch (Exception ignored) {}
        }).start();
        child.waitFor();
        System.out.println("Child finished safely");
    }
}

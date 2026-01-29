import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class ParentProcess {

    public static void main(String[] args) throws Exception {

        Process child =new ProcessBuilder("java", "ChildProcess").start();
        PrintWriter out =new PrintWriter(child.getOutputStream(), true);
        BufferedReader childOut =new BufferedReader(new InputStreamReader(child.getInputStream()));
        BufferedReader childErr =new BufferedReader(new InputStreamReader(child.getErrorStream()));
        new Thread(() -> {
            try {
                String line;
                while ((line = childErr.readLine()) != null) {
                    System.out.println("[CHILD LOG] " + line);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();

        System.out.println("Parent sending message...");
        out.println("Hello from parent");

        String response = childOut.readLine();
        System.out.println("Parent received: " + response);
    }
}

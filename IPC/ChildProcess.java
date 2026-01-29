import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class ChildProcess {
    public static void main(String[] args) throws Exception {

        System.err.println("Child started. Waiting for message...");
        BufferedReader in =new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out =new PrintWriter(System.out, true);
        String message = in.readLine();
        System.err.println("Child received: " + message);
        out.println("ACK from child");
    }
}

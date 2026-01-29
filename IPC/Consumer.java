import java.io.*;
import java.net.*;

public class Consumer {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("localhost", 7000);
        PrintWriter out =new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in =new BufferedReader(new InputStreamReader(socket.getInputStream()));
        out.println("CONSUMER");
        String msg = in.readLine();
        System.out.println("Consumed message: " + msg);

        socket.close();
    }
}

import java.io.*;
import java.net.*;

public class Producer {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("localhost", 7000);
        PrintWriter out =new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in =new BufferedReader(new InputStreamReader(socket.getInputStream()));
        out.println("PRODUCER");
        out.println("OrderCreated:123");
        System.out.println("Broker response: " + in.readLine());
        socket.close();
    }
}

import java.io.*;
import java.net.*;
import java.util.concurrent.*;

public class MessageBroker {

    static BlockingQueue<String> queue = new LinkedBlockingQueue<>();

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(7000);
        System.out.println("Broker running on port 7000");

        while (true) {
            Socket client = serverSocket.accept();
            new Thread(() -> {
                try {
                    handleClient(client);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    static void handleClient(Socket client) throws Exception {
        BufferedReader in =new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out =new PrintWriter(client.getOutputStream(), true);
        String role = in.readLine();
        if ("PRODUCER".equals(role)) {
            String msg = in.readLine();
            queue.put(msg);                 
            out.println("ACK");             
        }
        if ("CONSUMER".equals(role)) {
            String msg = queue.take();      
            out.println(msg);               
        }
        client.close();
    }
}

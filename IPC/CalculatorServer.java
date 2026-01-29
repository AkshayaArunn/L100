import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class CalculatorServer {

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(6000);
        System.out.println("RPC Server started on port 6000");
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
        DataInputStream in =new DataInputStream(client.getInputStream());
        DataOutputStream out =new DataOutputStream(client.getOutputStream());
        String method = in.readUTF(); 
        if ("echo".equals(method)) {
            String a = in.readUTF();
            System.out.println("Message received from Client");
            out.writeUTF(a); 
            out.flush();
        }
        client.close();
    }
}

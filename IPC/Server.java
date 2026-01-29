import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(5000);
        System.out.println("Server waiting...");

        Socket client = serverSocket.accept(); // BLOCKS
        System.out.println("Client connected");

        BufferedReader in =
                new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out =
                new PrintWriter(client.getOutputStream(), true);

        String msg = in.readLine();
        System.out.println("Server received: " + msg);

        out.println("ACK from server");

        client.close();
        serverSocket.close();
    }
}

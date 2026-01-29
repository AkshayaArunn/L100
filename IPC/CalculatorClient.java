import java.io.*;
import java.net.Socket;
import java.util.Scanner;

public class CalculatorClient {

    public static void main(String[] args) throws Exception {
        Scanner sc=new Scanner(System.in);
        System.out.println("Hi CLient! Enter a message for the server");
        String msg=sc.nextLine();
        Socket socket = new Socket("localhost", 6000);
        DataOutputStream out =new DataOutputStream(socket.getOutputStream());
        DataInputStream in = new DataInputStream(socket.getInputStream());
        out.writeUTF("echo"); 
        out.writeUTF(msg);       
        out.flush();
        String result = in.readUTF(); 
        System.out.println("MEssage from server: " + result);
        socket.close();
    }
}

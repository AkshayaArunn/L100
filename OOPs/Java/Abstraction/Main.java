package Java.Abstraction;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("\nWelcome to the Payment Process");
        System.out.println("""
                Dear Customer, enter your preferred payment method:
                1 - UPI Payment
                2 - Card Payment
                """);

        int choice = sc.nextInt();

        PaymentMethod method;   // abstraction reference
        OrderService service;
      
        switch (choice) {
            case 1:
                method = new UpiPayment();
                service = new OrderService(method);
                service.checkout(500);
                break;

            case 2:
                method = new CardPayment();
                service = new OrderService(method);
                service.checkout(500);
                break;

            default:
                System.out.println("Invalid payment mode!");
        }
    

        sc.close();
    }
}








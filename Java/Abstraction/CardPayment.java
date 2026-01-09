package Java.Abstraction;

public class CardPayment implements PaymentMethod {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " using Card");
    }
}

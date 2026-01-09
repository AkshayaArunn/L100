package Java.Abstraction;
public class UpiPayment implements PaymentMethod {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " using UPI");
    }
}


package Java.Abstraction;
public class OrderService {

    private final PaymentMethod payment;

    public OrderService(PaymentMethod payment) {
        this.payment = payment;
    }

    public void checkout(double amount) {
        payment.pay(amount);
    }
}

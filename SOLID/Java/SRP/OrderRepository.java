package SRP;

public class OrderRepository {
    public void save(String orderId, double amount) {
        System.out.println("Order saved -> ID: " + orderId + ", Amount: " + amount);
    }
}

package SRP;

public class DiscountService {
    public double applyDiscount(double amount) {
        return amount > 5000 ? amount * 0.10 : 0;
    }
}

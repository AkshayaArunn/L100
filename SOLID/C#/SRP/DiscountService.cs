public class DiscountService
{
    public double ApplyDiscount(double amount)
    {
        return amount > 5000 ? amount * 0.10 : 0;
    }
}

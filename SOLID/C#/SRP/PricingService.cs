public class PricingService
{
    public double ApplyTax(double amount)
    {
        return amount + amount * 0.18;
    }
}

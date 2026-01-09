public class UpiPayment : IPaymentMethod
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"UPI payment of ₹{amount} successful.");
    }
}

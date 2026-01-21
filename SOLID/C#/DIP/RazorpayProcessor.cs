using System;

public class RazorpayProcessor : IPaymentProcessor
{
    public bool Pay(double amount)
    {
        Console.WriteLine("Charging via Razorpay");
        return true;
    }
}

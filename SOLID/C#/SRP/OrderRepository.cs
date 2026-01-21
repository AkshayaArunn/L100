using System;

public class OrderRepository
{
    public void Save(string orderId, double amount)
    {
        Console.WriteLine($"Order saved -> ID: {orderId}, Amount: {amount}");
    }
}

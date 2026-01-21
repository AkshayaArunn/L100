using System;

public class OrderService
{
    private readonly IPaymentProcessor paymentProcessor;
    private readonly IInventoryManager inventoryManager;

    public OrderService(IPaymentProcessor paymentProcessor,
                        IInventoryManager inventoryManager)
    {
        this.paymentProcessor = paymentProcessor;
        this.inventoryManager = inventoryManager;
    }

    public void PlaceOrder(string product, double amount)
    {
        if (paymentProcessor.Pay(amount))
        {
            inventoryManager.Reserve(product);
            Console.WriteLine("Order placed");
        }
    }
}

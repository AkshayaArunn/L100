using System;

class Program
{
    static void Main(string[] args)
    {
        IPaymentProcessor payment = new RazorpayProcessor();
        IInventoryManager inventory = new WarehouseInventory();

        var service = new OrderService(payment, inventory);
        service.PlaceOrder("Laptop", 80000);
    }
}

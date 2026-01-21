using System;

public class WarehouseInventory : IInventoryManager
{
    public void Reserve(string product)
    {
        Console.WriteLine($"Inventory reserved for {product}");
    }
}

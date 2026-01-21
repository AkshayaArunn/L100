import { InventoryManager } from "./InventoryManager";
import { OrderService } from "./OrderService";
import { PaymentProcessor } from "./PaymentProcessor";
import { RazorpayProcessor } from "./RazorpayProcessor";
import { WarehouseInventory } from "./WarehouseInventory";
function main() {
    const payment: PaymentProcessor = new RazorpayProcessor();
    const inventory: InventoryManager = new WarehouseInventory();

    const service = new OrderService(payment, inventory);
    service.placeOrder("Laptop", 80000);
}

main();
import { PaymentProcessor } from "./PaymentProcessor";
import { InventoryManager } from "./InventoryManager";
export class OrderService {
    constructor(
        private paymentProcessor: PaymentProcessor,
        private inventoryManager: InventoryManager
    ) {}

    placeOrder(product: string, amount: number): void {
        if (this.paymentProcessor.pay(amount)) {
            this.inventoryManager.reserve(product);
            console.log("Order placed");
        }
    }
}
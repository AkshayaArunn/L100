import { InventoryManager } from "./InventoryManager";
export class WarehouseInventory implements InventoryManager {
    reserve(product: string): void {
        console.log(`Inventory reserved for ${product}`);
    }
}

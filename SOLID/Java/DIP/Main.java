public class Main {
    public static void main(String[] args) {
        PaymentProcessor payment = new RazorpayProcessor();
        InventoryManager inventory = new WarehouseInventory();

        OrderService service = new OrderService(payment, inventory);
        service.placeOrder("Laptop", 80000);
    }
}

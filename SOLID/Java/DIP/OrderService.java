class OrderService {
    private final PaymentProcessor paymentProcessor;
    private final InventoryManager inventoryManager;

    public OrderService(PaymentProcessor paymentProcessor,
                        InventoryManager inventoryManager) {
        this.paymentProcessor = paymentProcessor;
        this.inventoryManager = inventoryManager;
    }

    public void placeOrder(String product, double amount) {
        if (paymentProcessor.pay(amount)) {
            inventoryManager.reserve(product);
            System.out.println("Order placed");
        }
    }
}



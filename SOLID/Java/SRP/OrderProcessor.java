package SRP;

class OrderProcessor {

    private final PricingService pricingService;
    private final DiscountService discountService;
    private final OrderRepository repository;
    private final EmailNotificationService notifier;
    private final AuditLogger auditLogger;

    public OrderProcessor(
            PricingService pricingService,
            DiscountService discountService,
            OrderRepository repository,
            EmailNotificationService notifier,
            AuditLogger auditLogger
    ) {
        this.pricingService = pricingService;
        this.discountService = discountService;
        this.repository = repository;
        this.notifier = notifier;
        this.auditLogger = auditLogger;
    }

    public void process(String orderId, double amount, String email) {
        double taxedAmount = pricingService.applyTax(amount);
        double discount = discountService.applyDiscount(amount);
        double finalAmount = taxedAmount - discount;

        repository.save(orderId, finalAmount);
        notifier.notifyCustomer(email);
        auditLogger.log("Order processed successfully: " + orderId);
    }
}

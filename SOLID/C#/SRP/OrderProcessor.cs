public class OrderProcessor
{
    private readonly PricingService pricing;
    private readonly DiscountService discount;
    private readonly OrderRepository repository;
    private readonly EmailNotificationService notifier;
    private readonly AuditLogger audit;

    public OrderProcessor(
        PricingService pricing,
        DiscountService discount,
        OrderRepository repository,
        EmailNotificationService notifier,
        AuditLogger audit
    )
    {
        this.pricing = pricing;
        this.discount = discount;
        this.repository = repository;
        this.notifier = notifier;
        this.audit = audit;
    }

    public void Process(string orderId, double amount, string email)
    {
        double taxedAmount = pricing.ApplyTax(amount);
        double discountValue = discount.ApplyDiscount(amount);
        double finalAmount = taxedAmount - discountValue;

        repository.Save(orderId, finalAmount);
        notifier.Notify(email);
        audit.Log($"Order processed successfully: {orderId}");
    }
}

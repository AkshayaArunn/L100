using System;

class Program
{
    static void Main(string[] args)
    {
        var pricingService = new PricingService();
        var discountService = new DiscountService();
        var repository = new OrderRepository();
        var notificationService = new EmailNotificationService();
        var auditLogger = new AuditLogger();

        var processor = new OrderProcessor(
            pricingService,
            discountService,
            repository,
            notificationService,
            auditLogger
        );

        processor.Process("ORD-101", 6000, "customer@example.com");
    }
}

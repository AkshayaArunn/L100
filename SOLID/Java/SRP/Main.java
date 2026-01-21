package SRP;

public class Main {

    public static void main(String[] args) {
        PricingService pricingService = new PricingService();
        DiscountService discountService = new DiscountService();
        OrderRepository orderRepository = new OrderRepository();
        EmailNotificationService notificationService = new EmailNotificationService();
        AuditLogger auditLogger = new AuditLogger();

        OrderProcessor processor = new OrderProcessor(
                pricingService,
                discountService,
                orderRepository,
                notificationService,
                auditLogger
        );

        processor.process("ORD-101", 6000, "customer@example.com");
    }
}

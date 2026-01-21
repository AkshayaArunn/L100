import { PricingService } from "./PricingService";
import { DisService } from "./DisService";
import { OrderRepo } from "./OrderRepo";
import { EmailNotifService } from "./EmailNotifService";
import { AuditLogger } from "./AuditLogger";

export class OrderProcessor {
    constructor(
        private pricing: PricingService,
        private discount: DisService,
        private repository: OrderRepo,
        private notifier: EmailNotifService,
        private audit: AuditLogger
    ) { }

    process(orderId: string, amount: number, email: string): void {
        const taxedAmount = this.pricing.applyTax(amount);
        const discount = this.discount.applyDiscount(amount);
        const finalAmount = taxedAmount - discount;

        this.repository.save(orderId, finalAmount);
        this.notifier.notify(email);
        this.audit.log(`Order processed successfully: ${orderId}`);
    }
}

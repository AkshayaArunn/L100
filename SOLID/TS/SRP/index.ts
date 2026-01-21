import { OrderProcessor } from "./OrderProcessor";
import { PricingService } from "./PricingService";
import { DisService } from "./DisService";
import { OrderRepo } from "./OrderRepo";
import { EmailNotifService } from "./EmailNotifService";
import { AuditLogger } from "./AuditLogger";

function main() {
    const processor = new OrderProcessor(
        new PricingService(),
        new DisService(),
        new OrderRepo(),
        new EmailNotifService(),
        new AuditLogger()
    );

    processor.process("ORD-101", 6000, "customer@example.com");
}

main();

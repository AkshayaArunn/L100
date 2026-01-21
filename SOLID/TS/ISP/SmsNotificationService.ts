import { SmsSender } from "./SmsSender";
import { DeliveryReportGenerator } from "./DeliveryReportenerator";
export class SmsNotificationService implements SmsSender, DeliveryReportGenerator {
    sendSms(message: string): void {
        console.log(`SMS sent: ${message}`);
    }

    generateDeliveryReport(): void {
        console.log("SMS delivery report generated");
    }
}

import { SmsSender } from "./SmsSender";
import { EmailSender } from "./EmailSender";
import { SmsNotificationService } from "./SmsNotificationService";
function notifyUser(sender: SmsSender) {
    sender.sendSms("OTP: 123456");
}

function main() {
    const sender: SmsSender = new SmsNotificationService();
    notifyUser(sender);
}

main();
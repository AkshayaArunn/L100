import { EmailNotification } from "./EmailNotification";
import { NotificationService } from "./NotificationService";

const service = new NotificationService(
    new EmailNotification()
);

service.notify("Your exam result is published");

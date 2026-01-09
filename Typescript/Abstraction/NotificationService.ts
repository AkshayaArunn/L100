import { Notification } from "./Notification";

export class NotificationService {
    constructor(private notifier: Notification) {}

    notify(message: string): void {
        this.notifier.send(message);
    }
}

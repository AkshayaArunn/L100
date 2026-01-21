export class EmailNotifService {
    notify(email: string): void {
        console.log(`Email sent to -> ${email}`);
    }
}

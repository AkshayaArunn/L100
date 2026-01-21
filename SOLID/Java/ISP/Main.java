public class Main {
    static void notifyUser(SmsSender sender) {
        sender.sendSms("OTP: 123456");
    }
    public static void main(String[] args) {
        SmsSender sender = new SmsNotificationService();
        notifyUser(sender);
    }
}
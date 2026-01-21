class SmsNotificationService implements SmsSender, DeliveryReportGenerator {

    public void sendSms(String message) {
        System.out.println("SMS sent: " + message);
    }

    public void generateDeliveryReport() {
        System.out.println("SMS delivery report generated");
    }
}
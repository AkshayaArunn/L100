class RazorpayProcessor implements PaymentProcessor {
    public boolean pay(double amount) {
        System.out.println("Charging via Razorpay");
        return true;
    }
}




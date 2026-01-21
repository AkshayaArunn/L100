import { PaymentProcessor } from "./PaymentProcessor";
export class RazorpayProcessor implements PaymentProcessor {
    pay(amount: number): boolean {
        console.log("Charging via Razorpay");
        return true;
    }
}
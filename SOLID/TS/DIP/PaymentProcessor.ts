export interface PaymentProcessor {
    pay(amount: number): boolean;
}


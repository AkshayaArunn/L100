export class PricingService {
    applyTax(amount: number): number {
        return amount + amount * 0.18;
    }
}

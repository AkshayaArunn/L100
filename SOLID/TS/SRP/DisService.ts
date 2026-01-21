export class DisService {
    applyDiscount(amount: number): number {
        return amount > 5000 ? amount * 0.10 : 0;
    }
}

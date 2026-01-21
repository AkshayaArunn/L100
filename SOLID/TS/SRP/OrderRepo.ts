export class OrderRepo {
    save(orderId: string, amount: number): void {
        console.log(`Order saved -> ID: ${orderId}, Amount: ${amount}`);
    }
}

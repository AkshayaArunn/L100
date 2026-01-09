public class PaymentService
{
    private readonly IPaymentMethod _paymentMethod;

    public PaymentService(IPaymentMethod paymentMethod)
    {
        _paymentMethod = paymentMethod;
    }

    public void Checkout(decimal amount)
    {
        _paymentMethod.Pay(amount);
    }
}

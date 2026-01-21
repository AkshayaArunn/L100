using System;

public interface IPaymentProcessor
{
    bool Pay(double amount);
}

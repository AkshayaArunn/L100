using System;

namespace ISP;

public class SmsNotificationService : ISmsSender, IDeliveryReportGenerator
{
    public void SendSms(string message)
    {
        Console.WriteLine($"SMS sent: {message}");
    }

    public void GenerateDeliveryReport()
    {
        Console.WriteLine("SMS delivery report generated");
    }
}

using System;

namespace ISP;

class Program
{
    static void NotifyUser(ISmsSender sender)
    {
        sender.SendSms("OTP: 123456");
    }

    static void Main(string[] args)
    {
        ISmsSender sender = new SmsNotificationService();
        NotifyUser(sender);
    }
}

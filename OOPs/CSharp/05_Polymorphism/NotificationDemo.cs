using System;

namespace Polymorphism
{
    public class NotificationDemo
    {
        public static void Run()
        {
            Console.WriteLine("---- Polymorphism Demo ----");

            INotification notification;

            notification = new EmailNotification();
            notification.Send("Welcome to our service");

            notification = new SmsNotification();
            notification.Send("Your OTP is 1234");
        }
    }
}

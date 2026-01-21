using System;

public class AuditLogger
{
    public void Log(string message)
    {
        Console.WriteLine($"AUDIT LOG -> {message}");
    }
}

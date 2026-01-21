using System;

namespace OCP
{
    public class WatermarkStep : IDocumentStep
    {
        public void Execute(Document document)
        {
            Console.WriteLine($"Watermark added -> {document.Name}");
        }
    }
}

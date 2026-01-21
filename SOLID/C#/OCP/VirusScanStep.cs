using System;

namespace OCP
{
    public class VirusScanStep : IDocumentStep
    {
        public void Execute(Document document)
        {
            Console.WriteLine($"Virus scanned -> {document.Name}");
        }
    }
}

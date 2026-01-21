using System;

namespace OCP
{
    public class TextExtractionStep : IDocumentStep
    {
        public void Execute(Document document)
        {
            Console.WriteLine($"Text extracted -> {document.Name}");
        }
    }
}

using System;

namespace InheritanceDemo
{
    public class PdfDocument : Document
    {
        public PdfDocument(string title) : base(title) { }

        public override void Print()
        {
            Console.WriteLine($"Printing PDF document: {Title}");
        }
    }
}

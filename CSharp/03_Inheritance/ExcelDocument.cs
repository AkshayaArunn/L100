using System;

namespace InheritanceDemo
{
    public class ExcelDocument : Document
    {
        public ExcelDocument(string title) : base(title) { }

        public override void Print()
        {
            Console.WriteLine($"Printing Excel sheet: {Title}");
        }
    }
}

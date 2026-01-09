using System;

namespace InheritanceDemo
{
    public class WordDocument : Document
    {
        public WordDocument(string title) : base(title) { }

        public override void Print()
        {
            Console.WriteLine($"Printing Word document: {Title}");
        }
    }
}

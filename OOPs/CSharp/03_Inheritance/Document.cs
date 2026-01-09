using System;

namespace InheritanceDemo
{
    public abstract class Document
    {
        public string Title { get; }

        protected Document(string title)
        {
            Title = title;
        }

        public void Open()
        {
            Console.WriteLine($"Opening document: {Title}");
        }

        public abstract void Print();
    }
}

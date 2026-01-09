using System;
using InheritanceDemo;

class Program
{
    static void Main()
    {
        Document[] documents =
        {
            new PdfDocument("Resume.pdf"),
            new WordDocument("ProjectReport.docx"),
            new ExcelDocument("Budget.xlsx")
        };

        foreach (Document doc in documents)
        {
            doc.Open();   // common behavior
            doc.Print();  // overridden behavior
            Console.WriteLine();
        }
    }
}

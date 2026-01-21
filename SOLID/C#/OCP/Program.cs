using System;
using System.Collections.Generic;

namespace OCP
{
    class Program
    {
        static void Main(string[] args)
        {
            var document = new Document("contract.pdf");

            var steps = new List<IDocumentStep>
            {
                new VirusScanStep(),
                new TextExtractionStep(),
                new WatermarkStep()
            };

            var pipeline = new DocumentPipeline(steps);
            pipeline.Process(document);
        }
    }
}

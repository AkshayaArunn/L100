using System.Collections.Generic;

namespace OCP
{
    public class DocumentPipeline
    {
        private readonly IEnumerable<IDocumentStep> steps;

        public DocumentPipeline(IEnumerable<IDocumentStep> steps)
        {
            this.steps = steps;
        }

        public void Process(Document document)
        {
            foreach (var step in steps)
            {
                step.Execute(document);
            }
        }
    }
}

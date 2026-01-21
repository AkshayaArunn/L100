using System;

namespace LSP
{
    class LocalUploader : IFileUploader
    {
        public bool CanUpload(long sizeInMb) => true;

        public void Upload(string fileName, long sizeInMb)
        {
            Console.WriteLine($"Local upload: {fileName}");
        }
    }
}

using System;

namespace LSP
{
    class CloudUploader : IFileUploader
    {
        private const long MAX_SIZE = 100;

        public bool CanUpload(long sizeInMb)
        {
            return sizeInMb <= MAX_SIZE;
        }

        public void Upload(string fileName, long sizeInMb)
        {
            Console.WriteLine($"Cloud upload: {fileName}");
        }
    }
}

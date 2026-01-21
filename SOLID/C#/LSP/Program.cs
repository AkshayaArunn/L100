using System;

namespace LSP
{
    class Program
    {
        static void StartUpload(IFileUploader uploader)
        {
            if (!uploader.CanUpload(500))
            {
                Console.WriteLine("Upload rejected: size not supported");
                return;
            }

            uploader.Upload("video.mp4", 500);
        }

        static void Main(string[] args)
        {
            IFileUploader uploader = new CloudUploader();
            StartUpload(uploader);
        }
    }
}

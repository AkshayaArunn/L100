using System;

namespace LSP
{
    interface IFileUploader
    {
        bool CanUpload(long sizeInMb);
        void Upload(string fileName, long sizeInMb);
    }
}

interface FileUploader {
    boolean canUpload(long sizeInMb);
    void upload(String fileName, long sizeInMb);
}
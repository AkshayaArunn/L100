class LocalUploader implements FileUploader {
    public boolean canUpload(long sizeInMb) {
        return true;
    }

    public void upload(String fileName, long sizeInMb) {
        System.out.println("Local upload: " + fileName);
    }
}
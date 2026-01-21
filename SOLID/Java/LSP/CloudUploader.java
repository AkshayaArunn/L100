class CloudUploader implements FileUploader {
    private static final long MAX_SIZE = 100;

    public boolean canUpload(long sizeInMb) {
        return sizeInMb <= MAX_SIZE;
    }

    public void upload(String fileName, long sizeInMb) {
        System.out.println("Cloud upload: " + fileName);
    }
}

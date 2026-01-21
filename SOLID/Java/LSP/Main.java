public class Main {
    static void startUpload(FileUploader uploader) {
        if (!uploader.canUpload(500)) {
            System.out.println("Upload rejected: size not supported");
            return;
        }
        uploader.upload("video.mp4", 500);
    }

    public static void main(String[] args) {
        FileUploader uploader = new CloudUploader();
        startUpload(uploader);
    }
}
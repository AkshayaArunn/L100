import { FileUploader } from "./FileUploader";
import { CloudUploader } from "./CloudUploader";
import { LocalUploader } from "./LocalUploader";

function startUpload(uploader: FileUploader) {
    if (!uploader.canUpload(500)) {
        console.log("Upload rejected: size not supported");
        return;
    }
    uploader.upload("video.mp4", 500);
}

function main() {
    const uploader: FileUploader = new CloudUploader();
    startUpload(uploader);
}
main();

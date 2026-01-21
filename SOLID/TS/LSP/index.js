"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CloudUploader_1 = require("./CloudUploader");
function startUpload(uploader) {
    if (!uploader.canUpload(500)) {
        console.log("Upload rejected: size not supported");
        return;
    }
    uploader.upload("video.mp4", 500);
}
function main() {
    var uploader = new CloudUploader_1.CloudUploader();
    startUpload(uploader);
}
main();

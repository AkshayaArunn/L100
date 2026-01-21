"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudUploader = void 0;
var CloudUploader = /** @class */ (function () {
    function CloudUploader() {
        this.MAX_SIZE = 100;
    }
    CloudUploader.prototype.canUpload = function (sizeInMb) {
        return sizeInMb <= this.MAX_SIZE;
    };
    CloudUploader.prototype.upload = function (fileName, sizeInMb) {
        console.log("Cloud upload: ".concat(fileName));
    };
    return CloudUploader;
}());
exports.CloudUploader = CloudUploader;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalUploader = void 0;
var LocalUploader = /** @class */ (function () {
    function LocalUploader() {
    }
    LocalUploader.prototype.canUpload = function (sizeInMb) {
        return true;
    };
    LocalUploader.prototype.upload = function (fileName, sizeInMb) {
        console.log("Local upload: ".concat(fileName));
    };
    return LocalUploader;
}());
exports.LocalUploader = LocalUploader;

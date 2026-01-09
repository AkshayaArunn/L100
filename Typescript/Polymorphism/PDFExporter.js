"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFExporter = void 0;
var PDFExporter = /** @class */ (function () {
    function PDFExporter() {
    }
    PDFExporter.prototype.export = function (content) {
        console.log("Exporting PDF:", content);
    };
    return PDFExporter;
}());
exports.PDFExporter = PDFExporter;

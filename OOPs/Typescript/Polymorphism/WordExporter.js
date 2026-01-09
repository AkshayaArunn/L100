"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordExporter = void 0;
var WordExporter = /** @class */ (function () {
    function WordExporter() {
    }
    WordExporter.prototype.export = function (content) {
        console.log("Exporting Word document:", content);
    };
    return WordExporter;
}());
exports.WordExporter = WordExporter;

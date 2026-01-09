"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportService = void 0;
var ExportService = /** @class */ (function () {
    function ExportService(exporter) {
        this.exporter = exporter;
    }
    ExportService.prototype.exportDocument = function (content) {
        this.exporter.export(content);
    };
    return ExportService;
}());
exports.ExportService = ExportService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatermarkStep = void 0;
class WatermarkStep {
    execute(document) {
        console.log(`Watermark added -> ${document.name}`);
    }
}
exports.WatermarkStep = WatermarkStep;

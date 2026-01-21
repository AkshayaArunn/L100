"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusScanStep = void 0;
class VirusScanStep {
    execute(document) {
        console.log(`Virus scanned -> ${document.name}`);
    }
}
exports.VirusScanStep = VirusScanStep;

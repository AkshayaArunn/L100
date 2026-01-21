"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentPipeline = void 0;
class DocumentPipeline {
    constructor(steps) {
        this.steps = steps;
    }
    process(document) {
        for (const step of this.steps) {
            step.execute(document);
        }
    }
}
exports.DocumentPipeline = DocumentPipeline;

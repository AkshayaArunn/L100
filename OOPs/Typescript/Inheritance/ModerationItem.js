"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationItem = void 0;
var ModerationItem = /** @class */ (function () {
    function ModerationItem(contentId) {
        this.isFlagged = false;
        this.contentId = contentId;
    }
    ModerationItem.prototype.flag = function () {
        this.isFlagged = true;
    };
    ModerationItem.prototype.isContentFlagged = function () {
        return this.isFlagged;
    };
    return ModerationItem;
}());
exports.ModerationItem = ModerationItem;

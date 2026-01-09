"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModeration = void 0;
var ModerationItem_1 = require("./ModerationItem");
var VideoModeration = /** @class */ (function (_super) {
    __extends(VideoModeration, _super);
    function VideoModeration(contentId, durationSeconds) {
        var _this = _super.call(this, contentId) || this;
        _this.durationSeconds = durationSeconds;
        return _this;
    }
    VideoModeration.prototype.review = function () {
        if (this.durationSeconds > 300) {
            this.flag();
            return "Video flagged: too long";
        }
        return "Video approved";
    };
    return VideoModeration;
}(ModerationItem_1.ModerationItem));
exports.VideoModeration = VideoModeration;

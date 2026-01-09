"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var NotificationService = /** @class */ (function () {
    function NotificationService(notifier) {
        this.notifier = notifier;
    }
    NotificationService.prototype.notify = function (message) {
        this.notifier.send(message);
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;

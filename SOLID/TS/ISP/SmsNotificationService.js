"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotificationService = void 0;
var SmsNotificationService = /** @class */ (function () {
    function SmsNotificationService() {
    }
    SmsNotificationService.prototype.sendSms = function (message) {
        console.log("SMS sent: ".concat(message));
    };
    SmsNotificationService.prototype.generateDeliveryReport = function () {
        console.log("SMS delivery report generated");
    };
    return SmsNotificationService;
}());
exports.SmsNotificationService = SmsNotificationService;

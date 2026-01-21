"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmsNotificationService_1 = require("./SmsNotificationService");
function notifyUser(sender) {
    sender.sendSms("OTP: 123456");
}
function main() {
    var sender = new SmsNotificationService_1.SmsNotificationService();
    notifyUser(sender);
}
main();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayProcessor = void 0;
var RazorpayProcessor = /** @class */ (function () {
    function RazorpayProcessor() {
    }
    RazorpayProcessor.prototype.pay = function (amount) {
        console.log("Charging via Razorpay");
        return true;
    };
    return RazorpayProcessor;
}());
exports.RazorpayProcessor = RazorpayProcessor;

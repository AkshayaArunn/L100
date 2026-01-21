"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var OrderService = /** @class */ (function () {
    function OrderService(paymentProcessor, inventoryManager) {
        this.paymentProcessor = paymentProcessor;
        this.inventoryManager = inventoryManager;
    }
    OrderService.prototype.placeOrder = function (product, amount) {
        if (this.paymentProcessor.pay(amount)) {
            this.inventoryManager.reserve(product);
            console.log("Order placed");
        }
    };
    return OrderService;
}());
exports.OrderService = OrderService;

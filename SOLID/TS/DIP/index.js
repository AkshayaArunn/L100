"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderService_1 = require("./OrderService");
var RazorpayProcessor_1 = require("./RazorpayProcessor");
var WarehouseInventory_1 = require("./WarehouseInventory");
function main() {
    var payment = new RazorpayProcessor_1.RazorpayProcessor();
    var inventory = new WarehouseInventory_1.WarehouseInventory();
    var service = new OrderService_1.OrderService(payment, inventory);
    service.placeOrder("Laptop", 80000);
}
main();

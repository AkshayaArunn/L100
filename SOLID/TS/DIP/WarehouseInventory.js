"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseInventory = void 0;
var WarehouseInventory = /** @class */ (function () {
    function WarehouseInventory() {
    }
    WarehouseInventory.prototype.reserve = function (product) {
        console.log("Inventory reserved for ".concat(product));
    };
    return WarehouseInventory;
}());
exports.WarehouseInventory = WarehouseInventory;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(array) {
        this.mobiles = array;
        this.totalPrice = this.totalPriceCalculation();
    }
    //setters
    MobileCollection.prototype.setMobile = function (array) {
        this.mobiles = array;
    };
    MobileCollection.prototype.setTotalPrice = function (price) {
        this.totalPrice = price;
    };
    //getters
    MobileCollection.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var suma = 0;
        this.mobiles.forEach(function (element) {
            suma += element.getPrice();
        });
        return suma;
    };
    MobileCollection.prototype.printCollection = function () {
        this.mobiles.forEach(function (element) {
            console.log("The caracteristics of the mobile ".concat(element.getName() + " are:"));
            element.printMobile();
        });
        console.log("Price overall: ".concat(this.totalPrice));
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;

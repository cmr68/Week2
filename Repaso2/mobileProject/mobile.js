"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //Setters
    Mobile.prototype.setName = function (modify) {
        this.name = modify;
    };
    Mobile.prototype.setTrademark = function (modify) {
        this.trademark = modify;
    };
    Mobile.prototype.setModel = function (modify) {
        this.model = modify;
    };
    Mobile.prototype.setColor = function (modify) {
        this.color = modify;
    };
    Mobile.prototype.setPrice = function (modify) {
        this.price = modify;
    };
    //Getters
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //imprimir características
    Mobile.prototype.printMobile = function () {
        console.log(("\nName: ".concat(this.name, " \nTrademark: ").concat(this.trademark, " \nmodel: ").concat(this.model, " \nColor: ").concat(this.color, " \nPrice: ").concat(this.price)));
    };
    return Mobile;
}());
exports.Mobile = Mobile;

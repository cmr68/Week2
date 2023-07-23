"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person2_1 = require("./person2");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        this.people.forEach(function (element) {
            console.log(element);
        });
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var c = new Contacts();
var p1 = new person2_1.Person("Pepe", 56, "Calle Olvidada");
var p2 = new person2_1.Person("Maria", 60, "Calle Encontrada");
c.people = [p1, p2];
console.log(c.people);
c.printCalendar();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("./contacts");
var person2_1 = require("./person2");
var c = new contacts_1.Contacts();
var p1 = new person2_1.Person("Pepe", 56, "Calle Olvidada");
var p2 = new person2_1.Person("Maria", 60, "Calle Encontrada");
c.people = [p1, p2];
console.log(c.people);
c.printCalendar();

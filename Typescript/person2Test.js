"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person2");
var persona = new person_1.Person("Lola", 23, "Calle Pedrito Rico");
persona.printName();
console.log(persona.getAdress());
persona.setAdress("Calle Nueva");
console.log(persona.getAdress());

let myLib = require("./person.js");
let hobbiesP = ["Nadar", "Bucear", "Pescar"];
let persona = new myLib.Person("Laura","Perez",1985,hobbiesP);
console.log(persona.name,persona.surname,persona.age);
console.log(persona.printAll());
console.log(persona.imc(1.7,68));
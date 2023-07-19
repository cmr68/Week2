let myLib = require("./person.js");
let persona = new myLib.Person("Laura","Perez",1985);
console.log(persona.name,persona.surname,persona.age);
console.log(persona.printAll());
console.log(persona.imc(1.7,68));
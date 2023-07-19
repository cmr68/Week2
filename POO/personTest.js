let {Person} = require("./person.js");
let hobbiesP = ["Nadar", "Bucear", "Pescar"];
let persona = new Person("Laura","Perez",1985,hobbiesP);
console.log(persona);
console.log(persona.printAll());
console.log(persona.imc(1.7,68));
persona.printhobbies();
import{Person} from "./person"
let persona = new Person("Lola", 23, "Calle Pedrito Rico");
persona.printName();
console.log(persona.getAdress());
persona.setAdress("Calle Nueva");
console.log(persona.getAdress());


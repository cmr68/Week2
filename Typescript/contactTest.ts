import { Contacts } from "./contacts";
import { Person } from "./person2";
let c = new Contacts();
let p1 = new Person("Pepe", 56, "Calle Olvidada");
let p2 = new Person("Maria", 60, "Calle Encontrada");

c.people = [p1,p2];
console.log(c.people);
c.printCalendar();

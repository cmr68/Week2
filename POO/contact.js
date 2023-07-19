// Reto 7
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos de la clase 
//   Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada objeto Person.
let {Person} = require("./person.js");
class Contacts{
    constructor(){
        this.persona = [];
    }
    //Métodos
    printPersons(){
        return c.persona;
    }
}
module.exports = {Contacts};
let c = new Contacts();
let perona1 = new Person("Mari","Martinez",1956,["andar","pintar","teatro"]);
let perona2 = new Person("Noel","Giner",2005,["leer","jugar","fiesta"]);
c.persona.push(perona1,perona2);


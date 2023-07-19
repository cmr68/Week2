// Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.
class Person{
    constructor(name, surname, brith, hobbiesP){
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = brith;
        this.age = this.age(2023);
        this.hobbies = hobbiesP;
    }
    //Métodos 
    //Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC 
    //(índice de mas corporal) de cualquier persona que se haya creado como un objeto de la clase.
    imc(height, weight){
        return weight/height;
    }
    //Calcula la edad de la persona
    age(currentYear){
        return currentYear - this.yearOfBirth;
    }
    //imprime todos los atributos
    printAll(){
        console.log(`- ${this.name} - ${this.surname} - ${this.yearOfBirth} - ${this.age} - ${this.hobbies}`);
    }
    printhobbies(){
        console.log(`${this.hobbies}`);
    }
}
module.exports = {Person};
// let hobbiesP = ["Nadar","Bucear","Pescar"];
// let person1 = new Person("Patricia","Alvarez",1994,hobbiesP);
// console.log(person1.name,"tiene un IMC de:",person1.imc(1.78,69));
// console.log(person1.name,person1.surname, "tiene", person1.age,"años");
// person1.printAll();
// person1.printhobbies();

// Reto 7
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos de la clase 
//   Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada objeto Person.
class Contacts{
    constructor(){
        this.persona = [new Person("Mari","Martinez",1956,["andar","pintar","teatro"]),
                       new Person("Noel","Giner",2005,["leer","jugar","fiesta"])];
    }
    //Métodos
    printPersons(){
        console.log(this.persona);
    }
}
let c = new Contacts();
c.printPersons();

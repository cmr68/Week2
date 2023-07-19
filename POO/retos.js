// Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.
class Person{
    constructor(name, surname, brith){
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = brith;
        this.age = this.age(2023);
        this.hobbies = hobbies();
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
        console.log(`- ${this.name} - ${this.surname} - ${this.yearOfBirth} - ${this.age} -`);
    }
    hobbies(hobbiesP){
        console.log(`${this.hobbies}`);
    }
}

let person1 = new Person("Patricia","Alvarez",1994);
console.log(person1.name,"tiene un IMC de:",person1.imc(1.78,69));
console.log(person1.name,person1.surname, "tiene", person1.age,"años");
person1.printAll();
let hobbiesP = ["Nadar,Bucear,Pescar"];
person1.hobbies(hobbiesP);

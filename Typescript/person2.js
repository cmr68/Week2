"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, ages, adress) {
        this.name = name;
        this.ages = ages;
        this.adress = adress;
    }
    // - printName(). Imprime por consola el nombre
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    // - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento 
    Person.prototype.yearOfBrith = function (currentYear) {
        return currentYear - this.ages;
    };
    // - setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
    Person.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    // - getAddress():string. Devuelve el valor del atributo addess.
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    return Person;
}());
exports.Person = Person;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    //n longitud del vector y m máximo valor de los elementos del vector
    function Vector(n, k) {
        this.elements = []; //inicializa el array
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k)); //genera numeros aleatorios
        }
    }
    //Métodos
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    //Suma 2 vectores
    Vector.prototype.add = function (v1) {
        var resul = new Vector(0, 0);
        if (this.elements.length === v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                resul.elements.push(this.elements[i] + v1.elements[i]);
            }
        }
        else {
            console.log("Error.Vectores de distinto tamaño");
        }
        return resul;
    };
    //Resta 2 vectores
    Vector.prototype.subs = function (v1) {
        var resul = new Vector(0, 0);
        if (this.elements.length === v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                resul.elements.push(this.elements[i] - v1.elements[i]);
            }
        }
        else {
            console.log("Error.Vectores de distinto tamaño");
        }
        return resul;
    };
    //Multiplica 2 vectores
    Vector.prototype.mult = function (v1) {
        var resul = new Vector(0, 0);
        if (this.elements.length === v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                resul.elements.push(this.elements[i] * v1.elements[i]);
            }
        }
        else {
            console.log("Error.Vectores de distinto tamaño");
        }
        return resul;
    };
    //Multiplica vector por un numero 
    Vector.prototype.multNumber = function (n) {
        var resul = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resul.elements.push(this.elements[i] * n);
        }
        return resul;
    };
    return Vector;
}());
exports.Vector = Vector;

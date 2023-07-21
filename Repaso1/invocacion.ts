import { isEven } from "./condicionales";
import { add } from "./buclesFor";
let arr1 = ["Casa", "Coche", "Ciudad", "Cesta"]
let arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let arr3 = ["Venezuela", "Veneno", "Voltaje"]
let string1 = add(arr1);
let string2 = add(arr2);
let string3 = add(arr3);
console.log("strig1, ",isEven(string1));
console.log("strig2, ",isEven(string2));
console.log("strig3, ",isEven(string3));


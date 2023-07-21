"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var evenNumbers = function (num) {
    for (var i = 1; i < num; i += 2) {
        console.log(i);
    }
};
var myRevert = function (myArr) {
    var revert = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        revert.push(myArr[i]);
    }
    return revert;
};
var isRainbow = function (colors) {
    //rojo, naranja, amarillo, verde, cian y azul
    var arcoiris = colors.filter(function (element) {
        return element == "rojo" || element == "naranja" ||
            element == "amarillo" || element == "verde" ||
            element == "cian" || element == "azul";
    });
    console.log(arcoiris);
};
var add = function (myWords) {
    var sumatorio = myWords.reduce(function (acumulador, element) {
        return acumulador + element.length;
    }, 0);
    return sumatorio;
};
exports.add = add;
//Main
evenNumbers(20);
var arr = [1, 2, 3, 4, 5, 6];
var revertArr = myRevert(arr);
console.log("revertir arr", revertArr);
var colores = ["lila", "morado", "amarillo", "beig", "negro", "cian", "azul"];
isRainbow(colores);
(0, exports.add)(colores);

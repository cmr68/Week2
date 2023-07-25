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
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "cian", "azul"];
    for (var i = 0; i < colors.length; i++) {
        var encontrado = false;
        for (var j = 0; j < arcoiris.length && !encontrado; j++) {
            if (colors[i] == arcoiris[j]) {
                encontrado = true;
            }
        }
        if (encontrado) {
            console.log("".concat(colors[i], " est\u00E1 en el arco\u00EDris"));
        }
        else {
            console.log("".concat(colors[i], " NO est\u00E1 en el arco\u00EDris"));
        }
    }
};
var add = function (myWords) {
    var sumatorio = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumatorio += myWords[i].length;
    }
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
console.log("Caracteres almacenadas", (0, exports.add)(colores));

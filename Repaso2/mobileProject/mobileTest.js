"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("Nokia", "049474J", "Model XP83", "Blanco", 890);
console.log(myMobile);
console.log("Probando setters");
myMobile.setName("New name");
myMobile.setTrademark("9999999");
myMobile.setModel("New model");
myMobile.setColor("Rojo");
myMobile.setPrice(99999);
console.log(myMobile);
console.log("Probando getters:");
console.log(myMobile.getName(), myMobile.getTrademark(), myMobile.getModel(), myMobile.getColor(), myMobile.getPrice());
//Parte 2 del ejercicio
console.log("-------- Parte 2 del ejercicio -------");
var myMobile2 = new mobile_1.Mobile("Samsung", "990H9JL97", "MODEL PS67", "GRIS", 789);
var myMobile3 = new mobile_1.Mobile("Huawei", "2IK8878IK3", "MODEL ALC9", "VERDE", 644);
var array = [myMobile, myMobile2, myMobile3];
array.forEach(function (element) {
    element.printMobile();
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var p = new point_1.Point(5, 6);
console.log("x:", p.getX, "y:", p.getY);
p.setX(99);
p.setY(88);
console.log("Solo console.log", p);
p.toString();

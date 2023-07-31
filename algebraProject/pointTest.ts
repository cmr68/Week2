import { Point } from "./point";
let p = new Point(5,6);
console.log("x:",p.getX(), "y:",p.getY());
p.setX(2);
p.setY(4);
console.log("Solo console.log",p);

console.log("toString(): ",p.toString());
console.log("Distancia al pto origen",p.distanceToOrigin());

let p2 = new Point(7,9);
console.log("Distancia entre el p1 y p2: ",p.calculateDistance(p2));

console.log("Calcular cuadrante: ", p.calculateQuadrant());



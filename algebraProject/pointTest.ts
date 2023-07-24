import { Point } from "./point";
let p = new Point(5,6);
console.log("x:",p.getX, "y:",p.getY);
p.setX(99);
p.setY(88);
console.log("Solo console.log",p);

p.toString();


import { Point } from "./point";
import { Triangle } from "./triangle";
let vertex1 = new Point(0, 0);
let vertex2 = new Point(3, 0);
let vertex3 = new Point(0, 4);

let triangle = new Triangle(vertex1,vertex2,vertex3);

let sideLengths = triangle.calculateLengthSides();
console.log("Side lengths:", sideLengths);

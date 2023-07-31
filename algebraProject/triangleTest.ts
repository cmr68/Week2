import { Point } from "./point";
import { Triangle } from "./triangle";
let vertex1 = new Point(1, 1);
let vertex2 = new Point(3, 1);
let vertex3 = new Point(1, 4);

let triangle = new Triangle(vertex1,vertex2,vertex3);

let sideLengths = triangle.calculateLengthSides();
console.log("Side lengths:", sideLengths);

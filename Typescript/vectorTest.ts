import { Vector } from "./vector";
let v1 = new Vector(5,50);
let v2 = new Vector(5,50);
v1.print();
v2.print();
let suma = v1.add(v2);
let resta = v1.subs(v2);
let mult = v1.mult(v2);
let multNum = v1.multNumber(2);
console.log("suma:\n", suma,
            "resta:\n", resta,
            "mult:\n",mult,
            "multNum:\n", multNum);



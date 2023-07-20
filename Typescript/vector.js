var Vector = /** @class */ (function () {
    //n longitud del vector y m máximo valor de los elementos del vector
    function Vector(n, k) {
        this.elements = []; //inicializa el array
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k)); //genera numeros aleatorios
        }
    }
    //Métodos
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    return Vector;
}());

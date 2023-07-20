export class Vector{
    private elements: number[];
    //n longitud del vector y m máximo valor de los elementos del vector
    constructor(n: number, k: number){
        this.elements = []; //inicializa el array
        for(let i=0; i<n; i++){
            this.elements.push(Math.floor(Math.random() * k)); //genera numeros aleatorios
        }
    }
    //Métodos
    print():void{
        console.log(this.elements);
    }
    add(v1: Vector):Vector{
       let resul: number [];
       if(this.elements.length === v1.elements.length){
        for(let i=0; i<this.elements.length; i++){
            resul.push(this.elements[i] + v1.elements[i]);
        }
       }else{
        console.log("Error.Vectores de distinto tamaño");
       }
       return resul;
    }
}
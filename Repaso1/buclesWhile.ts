//devuelve true o false si hay un numero par en el array
const hasEven = (myNums:number[]):boolean =>{
    let i=0;
    let hayPar = false;
    while(hayPar==false){
        if(myNums[i]%2 == 0){
            hayPar = true;
        }
        i++;
    }
    return hayPar;
}

//imprime los num pares que hay
const hasEven2 = (myNums:number[]):void =>{
    let par: number[] = [];
    let i=0;
    while(i < myNums.length){
        if(myNums[i]%2 == 0){
            console.log(myNums[i]);
        }
        i++;
    }
}
//devuelve true si todos los nombres del array empiezan por M
const startWithM = (myNames:string[]): boolean =>{
    let i=0;
    let startM = true;
    while(i<myNames.length){
        if(myNames[i][0] !== "M"){
            startM = false;
        }
        i++;
    }
    return startM;
}
let arrayNum = [1,2,3,4,5];
console.log("hay par",hasEven(arrayNum));
hasEven2(arrayNum);
let arrayStr = ["Maria", "Mar", "Monte"];
console.log(startWithM(arrayStr));




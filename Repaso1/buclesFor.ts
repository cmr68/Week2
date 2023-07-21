const evenNumbers = (num: number) =>{
    for(let i=1; i<num; i+=2){
            console.log(i);
    }
}

const myRevert = (myArr: number[]): number[]=>{
    let revert: number[] = [];
    for(let i = myArr.length -1; i>=0; i--){
        revert.push(myArr[i]);
    }
    return revert;
}

const isRainbow =(colors: string[]) =>{
    //rojo, naranja, amarillo, verde, cian y azul
    let arcoiris = colors.filter(element =>
               element == "rojo" || element == "naranja" ||
               element == "amarillo" || element == "verde" ||
               element == "cian" || element == "azul"
    );
    console.log(arcoiris);
    
}

export const add = (myWords: string[]):number =>{
    let sumatorio = myWords.reduce((acumulador, element) => {
             return acumulador + element.length;
    },0);
    return sumatorio;
}
//Main
// evenNumbers(20);
// let arr = [1,2,3,4,5,6];
// let revertArr: number[] = myRevert(arr);
// console.log("revertir arr",revertArr);
// let colores = ["lila", "morado", "amarillo", "beig", "negro", "cian", "azul"];
// isRainbow(colores);
// add(colores);

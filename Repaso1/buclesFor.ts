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

const isRainbow =(colors: string[]):void =>{
    //rojo, naranja, amarillo, verde, cian y azul
    let arcoiris = ["rojo" , "naranja" ,"amarillo" ,"verde" ,"cian", "azul"]
   
    for(let i=0; i<colors.length; i++){
        let encontrado = false;
        for(let j=0; j<arcoiris.length && !encontrado; j++){
            if(colors[i]==arcoiris[j]){
                encontrado = true;
            }
        }
        if(encontrado){
            console.log(`${colors[i]} está en el arcoíris`);
        }else{
            console.log(`${colors[i]} NO está en el arcoíris`);
        }
    }
}

export const add = (myWords: string[]):number =>{
    let sumatorio = 0;
    for(let i=0; i<myWords.length; i++){
        sumatorio += myWords[i].length;
    }
    return sumatorio;
}
//Main
evenNumbers(20);
let arr = [1,2,3,4,5,6];
let revertArr: number[] = myRevert(arr);
console.log("revertir arr",revertArr);
let colores = ["lila", "morado", "amarillo", "beig", "negro", "cian", "azul"];
isRainbow(colores);
console.log("Caracteres almacenadas",add(colores));

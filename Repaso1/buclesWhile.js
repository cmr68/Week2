//devuelve true o false si hay un numero par en el array
var hasEven = function (myNums) {
    var i = 0;
    var hayPar = false;
    while (hayPar == false) {
        if (myNums[i] % 2 == 0) {
            hayPar = true;
        }
        i++;
    }
    return hayPar;
};
//imprime los num pares que hay
var hasEven2 = function (myNums) {
    var par = [];
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            console.log(myNums[i]);
        }
        i++;
    }
};
//devuelve true si todos los nombres del array empiezan por M
var startWithM = function (myNames) {
    var i = 0;
    var startM = true;
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            startM = false;
        }
        i++;
    }
    return startM;
};
var arrayNum = [1, 2, 3, 4, 5];
console.log("hay par", hasEven(arrayNum));
hasEven2(arrayNum);
var arrayStr = ["Maria", "Mar", "Monte"];
console.log(startWithM(arrayStr));

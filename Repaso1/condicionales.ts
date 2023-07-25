const signoZodiac = (dia:number, mes:string):string =>{
    let zodiac: string;
    if(dia < 1 || dia > 31){ 
        zodiac = "Día no válido";
    }else{
        if((dia <= 20 && mes == "enero") || (dia >= 22 && mes == "diciembre")){
            zodiac = "Capricornio";
        }else if((dia >= 21 && mes == "enero") || ((dia <= 19 && mes == "febrero"))){
            zodiac = "Acuario";
        }else if((dia >= 20 && mes == "febrero") || (dia <= 20 && mes == "marzo")){
            zodiac = "Piscis";
        }else if((dia >= 21 && mes == "marzo") || (dia <= 19 && mes == "abril")){
            zodiac = "Aries";
        }else if((dia >= 20 && mes == "abril") || (dia <= 20 && mes == "mayo")){
            zodiac = "Tauro";
        }else if((dia >= 21 && mes == "mayo") || (dia <= 20 && mes == "junio")){
            zodiac = "Gemminis";
        }else if((dia >= 21 && mes == "junio") || (dia <= 22 && mes == "julio")){
            zodiac = "Cancer";
        }else if((dia >= 23 && mes == "julio") || (dia <= 22 && mes == "agosto")){
            zodiac = "Leo";
        }else if((dia >= 23 && mes == "agosto") || (dia <= 22 && mes == "septiembre")){
            zodiac = "Virgo";
        }else if((dia >= 23 && mes == "septiembre") || (dia <= 22 && mes == "obtubre")){
            zodiac = "Libra";
        }else if((dia >= 23 && mes == "octubre") || (dia <= 21 && mes == "noviembre")){
            zodiac = "Escorpio";
        }else if((dia >= 22 && mes == "noviembre") || (dia <= 21 && mes == "diciembre")){
            zodiac = "Sagitario";
        }else{
            zodiac = "Mes no encontrado";
        }
    }
    return zodiac;
}

const continentt = (country:string):string =>{
    let continent:string;
    if(country=="España" || country == "Francia" || country == "Polonia"){
        continent = "Europa";
    }else if(country == "Canada" || country == "Estados Unidos" || country == "Mexico"){
        continent = "America";
    }else if(country == "Guinea" || country == "Sudan" || country == "Uganda"){
        continent = "Africa";
    }else if(country == "Australia" || country == "Nueva Zelanda" || country == "Fiyi" ){
        continent = "Oceania";
    }else if(country == "China" || country == "India" || country == "Nepal"){
        continent = "Asia";
    }
    return continent;
}

export const isEven = (num:number):void =>{
    if(num %2 === 0){
        console.log(num, "es par");
    }else{
        console.log(num, "es impar");
    }
}
//Main
console.log(signoZodiac(2,"pepe"));
console.log(continentt("España"));
isEven(5);

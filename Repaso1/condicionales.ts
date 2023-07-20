let signoZodiac = (dia:number, mes:string)=>{
    let zodiac: string;
    if(dia < 1 && dia > 31){
        console.log("Día no válido");
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
            
        }
    }
}
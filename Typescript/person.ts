export class Person{
    public name: string;
    public ages: number;
    private adress: string;
    constructor(name: string, ages:number, adress: string){
        this.name = name;
        this.ages = ages;
        this.adress = adress;
    }
    
    // - printName(). Imprime por consola el nombre
    printName(){
        console.log(this.name);
    }
    // - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento 
    yearOfBrith(currentYear: number){
        return currentYear - this.ages;
    }
    // - setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
    setAdress(adress: string):void{
        this.adress = adress;
    }
    // - getAddress():string. Devuelve el valor del atributo addess.
    getAdress():string{
        return this.adress;
    }
}

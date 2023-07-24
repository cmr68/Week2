import { Mobile } from "./mobile"
export class MobileCollection{
    private mobiles: Mobile[];
    private totalPrice:number;
    constructor(array:Mobile[]){
        this.mobiles = array;
        this.totalPrice = this.totalPriceCalculation();
    }
    //setters
    setMobile(array:Mobile[]):void{
        this.mobiles = array;
    }
    setTotalPrice(price:number):void{
        this.totalPrice = price;
    }
    //getters
    getMobile():Mobile[]{
        return this.mobiles;
    }
    getTotalPrice():number{
        return this.totalPrice;
    }
    private totalPriceCalculation():number{
        let suma = 0;
        this.mobiles.forEach(element =>{
            suma += element.getPrice();
        })
        return suma;
    }
    printCollection():void{
        this.mobiles.forEach(element =>{
            console.log(`The caracteristics of the mobile ${element.getName()+` are:`}`);
            element.printMobile();
        })
        console.log(`Price overall: ${this.totalPrice}`);
    }
}

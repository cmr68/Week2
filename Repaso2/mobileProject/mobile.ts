export class Mobile{
    private name:string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;
    constructor(name:string, trademark: string, model:string, color:string, price:number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //Setters
    setName(modify:string):void{
        this.name = modify;
    }
    setTrademark(modify:string):void{
        this.trademark = modify;
    }
    setModel(modify:string):void{
        this.model = modify;
    }
    setColor(modify:string):void{
        this.color = modify;
    }
    setPrice(modify:number):void{
        this.price = modify;
    }

    //Getters
    getName():string{
        return this.name;
    }
    getTrademark():string{
        return this.trademark;
    }
    getModel():string{
        return this.model;
    }
    getColor():string{
        return this.color;
    }
    getPrice():number{
        return this.price;
    }

    //imprimir características
    printMobile():void{
        console.log((`\nName: ${this.name} \nTrademark: ${this.trademark} \nmodel: ${this.model} \nColor: ${this.color} \nPrice: ${this.price}`));
    }
}

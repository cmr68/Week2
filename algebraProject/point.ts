export class Point{
    private x:number;
    private y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //Setters
    setX(newX:number):void{
        this.x = newX;
    }
    setY(newY:number):void{
        this.y = newY;
    }
    //Getters
    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    toString():string{
        let x = String(this.x);
        let y = String(this.y);
        let xy = x+y;
        return xy;
    }
}
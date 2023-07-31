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
        return `(${this.x},${this.y})`;
    }
    distanceToOrigin():number{
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    calculateDistance(anotherPoint:Point):number{
        let dx = this.x - anotherPoint.x;
        let dy = this.y - anotherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    calculateQuadrant():number{
        let quadrant = 0;
        if(this.x > 0 || this.y > 0){
            quadrant = 1;
        }else if(this.x < 0 || this.y > 0){
            quadrant = 2;
        }else if(this.x < 0 || this.y < 0){
            quadrant = 3;
        }else if(this.x > 0 || this.y < 0){
            quadrant = 4; 
        }
        return quadrant;
    }
    calculateNearest(points: Point[]):Point{
        if(points.length == 0){
            console.log("Array de puntos vacío");
        }

        let nearestPoint = points[0];
        let minDistance = this.calculateDistance(points[0]);

        for(let i=1; i < points.length; i++){
            let distance = this.calculateDistance(points[i]);
            if(distance < minDistance){
                minDistance = distance;
                nearestPoint = points[i];
            }
        }
        return nearestPoint;
    }
}
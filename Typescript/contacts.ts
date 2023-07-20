import { Person } from "./person2";
export class Contacts{
    public people: Person[];
    constructor(){
        this.people = [];
    }
    printCalendar():void{
        console.log(this.people);
    }
}
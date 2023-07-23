import { Book } from "./book";
export class Library{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(){
        this.books = [];
        this.address = "";
        this.manager = "";
    }

    //Métodos
    getBook():Book[]{
        return this.books;
    }
    getAddress():string{
        return this.address;
    }
    getManager():string{
        return this.manager;
    }
    setAddres(newAddress: string):void{
        this.address = newAddress;
    }
    setManager(newManager: string):void{
        this.manager = newManager;
    }

    toString():string{
        let result = `Adress: ${this.address}\n Manager: ${this.manager}\n Books in the Library:\n`;
        this.books.forEach((element) =>{
            result += element.toString() + "\n";
        });
        return result;
    }
    
    getNumberOfBooks():number{
        return this.books.length;
    }
    findByAuthor(author: string): Book[]{
        return this.books.filter((book) => book.getAuthor() === author);
    }
}
let l = new Library();

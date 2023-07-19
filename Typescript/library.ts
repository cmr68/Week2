import { Book } from "./book";
export class Library{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(){
        this.books = [];
        this.address;
        this.manager;
    }

    //Métodos
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
    toString(){
        return l.books;
    }
    getNumberOfBooks():number{
        return this.books.length;
    }
    findByAuthor(author: string): Book[]{
        return this.books.filter((book) => book.getAuthor() === author);
    }
}
let l = new Library();

export class Book{
    private title : string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Métodos
    getTitle():string{
        return this.title;
    }
    getnPages():number{
        return this.nPages;
    }
    getIsbn():string{
        return this.isbn;
    }
    getAuthor():string{
        return this.author;
    }
    getEditorial():string{
        return this.editorial;
    }

    setTitle(nuevoTitle: string):void{
        this.title = nuevoTitle;
    }
    setnPages(nuevonPages: number):void{
        this.nPages = nuevonPages;
    }
    setIsbn(nuevoIsbn: string):void{
        this.isbn = nuevoIsbn;
    }
    setAuthor(nuevoAuthor: string):void{
        this.author = nuevoAuthor;
    }
    setEditorial(nuevoEditorial: string):void{
        this.editorial = nuevoEditorial;
    }
    toString(){
        return (`Title - ${this.title} \n
                Numer of Pages - ${this.nPages}\n
                ISBN - ${this.isbn}\n
                Author - ${this.author}
                Editorial - ${this.editorial}`);
    }
}
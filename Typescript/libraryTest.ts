import { Library } from "./library";
import { Book } from "./book";
let l = new Library();
let b1 = new Book("LIBRO 1", 55, "44569-5D5566D", "AUTOR 1", "EDITORIAL 1");
let b2 = new Book("LIBRO 2", 555, "774569-5465566D", "AUTOR 2", "EDITORIAL 2");
 l.setAddres("Calle Nunca llega");
 l.setManager("Juan Perez");
 l.getBook().push(b1,b2);
 let findAuthor = l.findByAuthor("AUTOR 1");
 console.log("Autor encontrado:",findAuthor);

 //imprimir libros
 console.log(l.toString());
 //get y set
 console.log("Probando gets:\n",
             l.getAddress(),
             l.getManager(),
             l.getNumberOfBooks());
//Probando sets
l.setAddres("Nueva direccion");
l.setManager("Nuevo autor");

console.log("Probando toString()\n");
console.log(l.toString());

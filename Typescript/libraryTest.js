"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book_1 = require("./book");
var l = new library_1.Library();
var b1 = new book_1.Book("LIBRO 1", 55, "44569-5D5566D", "AUTOR 1", "EDITORIAL 1");
var b2 = new book_1.Book("LIBRO 2", 555, "774569-5465566D", "AUTOR 2", "EDITORIAL 2");
l.setAddres("Calle Nunca llega");
l.setManager("Juan Perez");
l.getBook().push(b1, b2);
var findAuthor = l.findByAuthor("Juan");
console.log("Autor encontrado:", findAuthor);
//imprimir libros
console.log(l.toString());
//get y set
console.log("Probando gets:\n", l.getAddress(), l.getManager(), l.getNumberOfBooks());
console.log("Probando sets:\n", l.setAddres("Nueva direccion"), l.setManager("Nuevo autor"));

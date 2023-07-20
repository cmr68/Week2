"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var book = new book_1.Book("El principito", 120, "45785B-154412", "Antoine de Saint-Exupéry", "Gran Travesía");
console.log("Imprimiendo book\n",book);
console.log("Prueba de todos los get:\n",
            book.getTitle(),
            book.getnPages(),
            book.getIsbn(),
            book.getAuthor(),
            book.getEditorial());
console.log("ToString():\n",book.toString());
book.setTitle("Cambio de nombre");
book.setnPages(999);
book.setIsbn("45256-7788F");
book.setAuthor("Cambio de author");
book.setEditorial("Cambio de editorial");
console.log("Probando los set:\n",book.toString());

import { Book } from "./book";
let book = new Book("El principito", 120, "45785B-154412", "Antoine de Saint-Exupéry", "Gran Travesía");
book.getTitle();
book.getnPages();
book.getIsbn();
book.getAuthor();
book.getEditorial();

book.toString();

book.setTitle("Cambio de nombre");
book.setnPages(999);
book.setIsbn("45256-7788F");
book.setAuthor("Cambio de author");
book.setEditorial("Cambio de editorial");

book.toString();
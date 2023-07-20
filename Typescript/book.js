"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Métodos
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (nuevoTitle) {
        this.title = nuevoTitle;
    };
    Book.prototype.setnPages = function (nuevonPages) {
        this.nPages = nuevonPages;
    };
    Book.prototype.setIsbn = function (nuevoIsbn) {
        this.isbn = nuevoIsbn;
    };
    Book.prototype.setAuthor = function (nuevoAuthor) {
        this.author = nuevoAuthor;
    };
    Book.prototype.setEditorial = function (nuevoEditorial) {
        this.editorial = nuevoEditorial;
    };
    Book.prototype.toString = function () {
        return ("Title - ".concat(this.title, "\n                Numer of Pages - ").concat(this.nPages, "\n                ISBN - ").concat(this.isbn, "\n                Author - ").concat(this.author, "\n                Editorial - ").concat(this.editorial));
    };
    return Book;
}());
exports.Book = Book;

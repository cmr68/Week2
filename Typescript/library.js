"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.address = "";
        this.manager = "";
    }
    //Métodos
    Library.prototype.getBook = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddres = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    Library.prototype.toString = function () {
        var result = "Adress: ".concat(this.address, "\n Manager: ").concat(this.manager, "\n Books in the Library:\n");
        this.books.forEach(function (element) {
            result += element.toString() + "\n";
        });
        return result;
    }; 
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.getAuthor() === author; });
    };
    return Library;
}());
exports.Library = Library;
var l = new Library();

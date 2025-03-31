const Produt = require("./Produt.js");

 module.exports = class Book extends Produt {
    constructor(title, synopsis, genre, pages, author, description, price, insStock = 0){
        super(`Livro: ${title}`, description, price, insStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this. pages = pages
        this.author = author
    }
 }
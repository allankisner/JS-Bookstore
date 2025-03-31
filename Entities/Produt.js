module.exports = class Produt {
    constructor(name, description, price, insStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.insStock = insStock
    }

    addToStock(quantity){
        this.insStock += quantity
    }

    removeToStock(quantity){
        this.insStock -= quantity
    }
}
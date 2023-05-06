class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(percentage) {
        return this.price * ((100-percentage) / 100)
    }
}

const pc_gamer = new Product('pc GAMER', 'i5 13400f and RTX 3060', 10500)

pc_gamer.addToStock(1)

console.log(pc_gamer)
console.log(pc_gamer.calculateDiscount(10))
console.log(pc_gamer.calculateDiscount(50))
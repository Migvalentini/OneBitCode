/*
INHERITANCE:

=> Inheritance is a feature que allows you to create classes that includes, or 'inherit' to be more precise, every attributes and methods from another class
=> The class that is inherit we call it superclass (or parent class), and the class that inherits everything we call it subclass (or child class)
=> A child class own every attributes and methods from the parent class, but you can also have your own
=> Examples: 
    - Imagines an User class that have your attributes and methods. We can have AdminUser, EditorUser and StandardUser classes who are all child of User, but each one also have you own attributes and methods
    - Or even a class Property (like in a real estate) can be the parent class of the House and Apartment child classes
*/

class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    get_price_per_square_meter(){
        return `$${Math.round(this.price / this.area)},00`
    }
}

class House extends Property{}

const land = new Property(200, 50000)
const house = new House(120, 200000)

console.log(land)
console.log(house.get_price_per_square_meter())
console.log(house instanceof House)
console.log(house instanceof Property)

class Apartment extends Property{
    constructor(number, area, price){
        // this.area = area : ERROR
        super(area, price)
        this.number = number
    }

    get_floor(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("201", 100, 160000)

console.log(apt)
console.log(apt.get_floor())
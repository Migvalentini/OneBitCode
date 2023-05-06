/*
POLYMORPHISM:

=> Polymorphism is the concept that describe the act of an object being able to assume different forms
=> In the OOP, it can be noticed in the method override
=> In Javascript, a child class can have your own methods of parent class implementations. To it we name methods override
=> Examples:
    - The Vehicle class possess some attributes and one move() method
    - The Bike, Ca, Ship and Plane classes are child of Vehicle, but each of them implements the move() method from a different form (overriding the method)
*/

class Vehicle {
    move() {
        console.log("The vehicle is moving")
    }
}

class Car extends Vehicle{
    move() {
        console.log("The car is moving")
    }
}

class Ship extends Vehicle{
    move() {
        console.log("The ship is sailing")
    }
}

class Aircraft extends Vehicle{
    move(speed) {
        console.log(`The aircraft is flying at ${speed}km/h`)
    }
}

const fusca = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

fusca.move()
blackPearl.move()
epoch.move(100)

function start(vehicle) {
    console.log(`Starting a vehicle...`)
    vehicle.move()
}

start(fusca)
start(blackPearl)
start(epoch)
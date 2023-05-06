/*
ASSOCIATION:

=> Association is a relationship between classes that allows one instance of one class to cause another to perform an action
=> It is like telling an application that an object of one type is connected, or depends, of an object of another type
=> Examples:
    - Objects of a class Person have an attribute that is an object of Address class
    - Objects of a class Product have an array of objects of the Category class 
*/

const Address = require("./05-association-address");
const Person = require("./05-association-person");

const addr = new Address("Main Street", 99, "Center", "Caxias do Sul", "RS")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.full_address())
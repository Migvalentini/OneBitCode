/*
OBJECTS:

=> It's a Javascript framework for working with key-value dictionary
=> The key-value pair in a Javascript object is called a property
=> Can be creted throught {}
*/

let object = {}
let name = "prop"

object.prop = "Hello World!"

console.log(object[name])
console.log(object)
console.log(object.prop === object["prop"])
console.log(object.prop === object[name])

let func = "log"
console[func]("Hello, World!")

const person = {}
person.name = "Miguel"
person.age = 16
person.classmates = ["isabela", "Laura", "Pedro"]
person.address = {
   streat: "Antonio Boff",
   number: 658
}

console.log(person)
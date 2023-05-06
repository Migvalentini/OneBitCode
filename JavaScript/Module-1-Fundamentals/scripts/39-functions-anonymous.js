/*
ANONYMOUS FUNCTIONS: 

=> Functions that have no name 
*/

function sum(a, b) {
   return a + b
}

let operation = sum

// console.log(operation(4, 5))

operation = function (a, b) {
   return a - b
}

// console.log(operation(10, 5))

hello_world()

// Normal functions are created on the program start

function hello_world() {
   console.log("Hello World!")
}

// Anonymous functions are created only on the line execution

const hi_world = function () {
   console.log("Hi World!")
}

hi_world()
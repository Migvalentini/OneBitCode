/*
HIGH ORDER FUNCTIONS:

=> Functions that takes another function as a parameter
*/

function calculate(a, b, operation) { // Calculate = high order function
   console.log("Calculating an operation...")
   const result = operation(a, b) // sum(3, 5)
   return result
}

function sum(x, y) {
   console.log("Calculating an sum...")
   return x + y
}

console.log(calculate(3, 5, sum))

console.log(calculate(8, 4, function (x, y) {
   console.log("Calculating an subtract...")
   return x - y
}))

function show_elements(element, index, array) {
   console.log({
      element,
      index,
      array
   })
}

const list = ["Apple", "Orange", "Lemon"]

for (let i = 0; i < list.length; i ++) {
   show_elements(list[i], i, list)
}

list.forEach(show_elements)
list.forEach(function (element, index, array) {
   console.log({
      element,
      index,
      array
   })
})
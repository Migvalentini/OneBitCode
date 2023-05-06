// Variables created in outer scope work in inner scope
// Variables created in inner scope don't work in outer scope

// Outer Scope
let pokemon = "Charmander"

function evolve() {
   // Inner Scope
   pokemon = "Charmeleon"
}

console.log(pokemon)
evolve()
console.log(pokemon)

function create_animal() {
   let animal = "Cat"
}

/* create_animal()
console.log(animal) */

// Var: variables created with var works in outer scope, but let don't work

function rate_grade(grade) {
   if (grade > 60) {
      var approved = true
      let situation = "Approved"
   } else {
      var approved = false
      let situation = "Reproved"
   }
   console.log(grade)
   console.log(approved)
   console.log(situation)
}

// rate_grade(80)
// rate_grade(50)

function hello() {
   var text = "Hello World!"
}

// console.log(text)

// With var, the system creates the variable but does not assign content to it and with let it is only created on the execution line

console.log(name)
console.log(lastname)

var name = "Miguel"
let lastname = "Valentini"

console.log(name)
console.log(lastname)
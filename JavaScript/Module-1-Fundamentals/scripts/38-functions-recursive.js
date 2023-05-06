/*
RECURSIVE FUNCTIONS:

=> A function that calls itself
*/

function divide(number) {
   console.log(number)
   if (number % 2 === 0) {
      divide(number / 2)
   } else {
      return number
   }
}

// divide(12)

// DANGEROUS = functions cannot call themselves endlessly

function double(number) {
   console.log(number)
   double(number * 2)
}

// double(1)

function factorial (number) {
   console.log("Number: " + number)
   if (number === 0) {
      return 1
   } else if (number === 1) {
      return 1
   } else {
      console.log(number + " * !" + (number - 1))
      return number * factorial(number - 1)
   }
}

console.log(factorial(5))
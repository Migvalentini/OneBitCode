async function asyncSum(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments for sum must be of type number')
   }
   return a + b
}

async function asyncSubtract(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments for subtract must be of type number')
   }
   return a - b
}

const sumResult = asyncSum(10, 3)
const subtractResult = asyncSubtract(10, 2)

Promise.all([sumResult, subtractResult]).then(results => {
   console.log(`Sum and subtract: ${results}`)
}).catch(error => {
   console.log(error)
})

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
   if (typeof x !== 'number') {
      return Promise.reject('arguments for square must be of type number')
   }
   return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
   console.log(`Square: ${squares}`)
}).catch(error => {
   console.log(error)
})
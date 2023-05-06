function calc_average(a, b) {
   const average = (a + b) / 2
   return average
}

const average = calc_average(4, 8)
console.log(average)

function create_product(name, price) {
   const product = {
      name,
      price,
      stock: 1
   }
   return product
}

console.log(create_product("Notebook Intel Core i5", 3000))

function rectangular_area(base, height) {
   return base * height
}

function square_area(side) {
   return rectangular_area(side, side)
}

console.log(rectangular_area(3, 7))
console.log(square_area(7))

function hello() {
   let text = "..."
   return text
   text = "Hello, World!" // Wont run
   console.log(text)
}

console.log(hello())

function majority(age) {
   if (age >= 18) {
      return "Older"
   } else {
      return "Younger"
   }
}

console.log(majority(24))
console.log(majority(10))
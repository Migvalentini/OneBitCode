const name1 = prompt("Enter the name of the first car:")
const velocity1 = parseFloat(prompt("Enter the velocity of the first car:"))

const name2 = prompt("Enter the name of the second car:")
const velocity2 = parseFloat(prompt("Enter the name of the second car:"))

if (velocity1 > velocity2) {
   alert("The " + name1 + " is faster than " + name2)
} else if (velocity2 > velocity1){
   alert("The " + name2 + " is faster than " + name1)
} else {
   alert("The cars have the same velocity")
}
/*
REST PARAMETERS:

=> It is a Javascript technique that allows a function to take any number of parameters
=> Also allows manipulate this parameters with such as an array in the function definition (what differs from arguments object)
=> They need to be the last parameter of the function
=> Example:
*/

function sum(...numbers) {
    return numbers.reduce((accumulated, num) => accumulated + num, 0)
}

console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4,5,6,7,8,9,10))
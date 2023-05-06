/*
ARROW FUNCTIONS:

=> Another way to write anonymous functions
=> Don't use the functions word, use => after the parameters
=> Doesn't have its own this, arguments, super and new.target
=> It also allows you to directly return an expression if it is a single line function
=> Example:
*/

function normal_sum(a, b) {
    return a + b
}

const anonymous_sum = function(a, b) {
    return a + b
}

const arrow_sum = (a, b) => {
    return a + b
}

function normal_multiply(a, b) {
    return a * b
}

const anonymous_multiply = function(a, b) {
    return a * b
}

const arrow_multiply = (a, b) => a * b

const arrow_double = n => `The double of ${n} is ${n * 2}`

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const starting_with_p = towns.filter(town => town[0] === 'P')

console.log(`
Normal Sum: ${normal_sum(3,6)}
Anonymous Sum: ${anonymous_sum(3,6)}
Arrow Sum: ${arrow_sum(3,6)} 
Normal Multiply: ${normal_multiply(3,6)}
Anonymous Multiply: ${anonymous_multiply(3, 6)}
Arrow Multiply: ${arrow_multiply(3, 6)}
${arrow_double(4)}
${starting_with_p}
`)
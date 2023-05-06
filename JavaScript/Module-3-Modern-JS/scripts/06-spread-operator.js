/*
SPREAD OPERATOR:

=> Operator that allows spreading the elements of an iterable object, such as an array or an string
=> Uses three points: ...iterableObject
=> Can be used to different purposes:
    - Pass multiple parameters at once
    - Clone iterable objects
    - Do manipulations and don't affect the original object
    - Transform string into arrays
=> Example:
*/

let string = "Hello World!"
let array = [1, 2, 3, 4, 5]

console.log(...string) // H e l l o   W o r l d !
console.log(...array) // 1 2 3 4 5

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const towns_copy = towns // reference to towns, not a clone

towns_copy.pop()
towns_copy.pop()
towns_copy.push('Juno')

console.log({towns, towns_copy})

const towns_clone = [...towns] // with the spread operator, we can clone the array

towns_clone.push('Aldebaran')

console.log([towns, towns_copy, towns_clone])

const towns_object  = {...towns}
const towns_object_clone = {...towns_object} // towns_object clone, not a copy

towns_object_clone.test = "Test"

console.log({towns_object, towns_object_clone})
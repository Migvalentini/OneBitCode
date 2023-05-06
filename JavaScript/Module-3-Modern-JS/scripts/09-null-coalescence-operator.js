/*
NULL COALESCENCE OPERATOR:

=> Logical operator that returns its right-hand operand when its left-hand is null or undefined. Otherwise, it returns its operand of the left side
=> Uses two question marks
=> it is different to || operator
=> Can be used to logical operations and also to assignment of default values through short-circuit-evaluation
=> Example:
*/

const a = 0 // false
const b = null //  null
const c = 'test' // true

console.log(a || b || c) // test
console.log(a ?? b ?? c) // 0

let d = 0
let e = d || 42

console.log({d, e}) // d: 0, e: 42

e = d ?? 42

console.log({d, e}) // d: 0, e: 0

let f = null ?? 42

console.log({f}) // f: 42
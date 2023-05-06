/*
Synchrony = linear run code
Asynchrony = not linear run code
*/

function step02() {
   console.log('Step 2')
}

console.log('Step 1')
step02()
console.log('Step 3')

console.log('Step 4')

setTimeout(() => { // asynchrony function
   console.log('Step 5')
}, 1000 * 2)

console.log('Step 6')
const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(array)

/* ADDING ELEMENTS: */
// push = appends elements to the end of an array and returns the length of the new array
console.log(array.push("Boromir"))

// unshift = appends new elements at the start of an array and returns the length of the new array
console.log(array.unshift("Boromir"))

/* REMOVING ELEMENTS: */
// pop = removes the last element from an array and returns the length of the new array
console.log(array.pop())

// shift = removes the first element from an array and returns the length of the new array
console.log(array.shift())

/* SEARCH FOR AN ELEMENT: */
// includes = Check if an element includes in the array and returns true or false
console.log(array.includes("Merry"))

// indexOf = Returns the index of the first occurrence of an element in an array
console.log(array.indexOf("Pippin"))

/* SLICE AND CONCATENATE: */
// slice = returns a copy of a section of an array.
console.log(array.slice(2, 6))
const hobbits = array.slice(-3)

// concat = combines two or more arrays
console.log(array.concat(hobbits))

/* REPLACEMENT: */
// splice = removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(array.splice(array.indexOf("Pippin"), 1, "Pippin, the hobbit"))

/* ITERATE: */
// for
for (let i = 0; i < array.length; i++) {
   console.log(array[i] + " is in the position " + i)
}
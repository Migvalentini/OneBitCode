/*
DESTRUCTURING OBJECTS AND ARRAYS:

=> Functionality that allows we create variables from object properties or array elements
=> In the case of object properties, the variables are created with the property name
=> In the case of array elements, we can assign however name to variable
=> It can also be used in another way, like function parameters
=> Example:
*/

const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

const [father, mother] = parents
// father = parents[0], mother = parents[1]

console.log(father, mother)

/* NORMAL WAY: function create_user (person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id, 
        name: person.name,
        job: person.job,
        parents: person.parents
    }
} */

function create_user ({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id, 
        name,
        job,
        parents
    }
}

const user = create_user(person)

console.log(user)
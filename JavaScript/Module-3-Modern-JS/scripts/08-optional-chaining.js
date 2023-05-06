/*
OPTIONAL CHAINING:

=> Operator that allows reading internal properties of a chain of objects without validation of each chain reference being performed
=> In another words, allows access internal properties without throwing errors when an properties is nullish (null or undefined)
=> Works similarly to standard chaining ("." operator), although is written with "?."
*/

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
}

console.log(user.friends[0].address.number)
// console.log(user.friends[0].phone.ddd) Uncaught TypeError: Cannot read properties of undefined (reading 'ddd')
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)
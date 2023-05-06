let person = {
   name: "Miguel",
   age: 16,
   say_hello() {
      console.log("Hello, World! My name is " + this.name)
      // this = referes to the object it isK
   }
}

console.log(person)
person.say_hello()
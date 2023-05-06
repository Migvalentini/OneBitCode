function double(n) {
   console.log("The double of " + n + " is " + n * 2)
}

double(4)
double(2)
double() // The double of undefined is NaN

function hello(name = "Miguel") {
   console.log("Hello, " + name + "!")
}

hello("World")
hello("Miguel")

function sum (a, b) {
   console.log("The sum result between " + a + " and " + b + " is " + (a + b))
}

 sum(3, 6)

function create_user(name, email, password, type = "adm") {
   const user = {
      name, // name: name
      email, // email: email
      password, // password: password
      type // type: type
   }
   console.log(user)
}

function new_user(name, type= "adm", email, password) { // optional parameters at the END
   const user = {
      name, // name: name
      email, // email: email
      password, // password: password
      type // type: type
   }
   console.log(user)
}

create_user("Miguel", "miguel@gmail.com", "1234")
new_user("Miguel", "miguel@gmail.com", "1234")

function many_parameters(name, telephone, address, birth, email, password) {
   // ...
}

function few_parameters(user) {
   // ...
   user.name
   user.telephone
   user.address
   user.birth
   user.email
   user.password
   console.log(user)
}

many_parameters("name", "telephone", "address", "birth", "email", "password")

const data_user = {
   name: "Miguel",
   telephone: "999999-9999",
   address: "Main Streat",
   birth: "01/01",
   email: "miguel@gmail.com",
   password: "1234"
}

few_parameters(data_user)
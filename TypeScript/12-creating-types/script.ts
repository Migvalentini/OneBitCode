let literal: "Hello World"
let pi: 3.14

// literal = "Hi" Type '"Hi"' is not assignable to type '"Hello World"'
// pi = 3 Type '3' is not assignable to type '3.14'

const test = 5 // const = Literal Type

let option: "yes" | "no" | "maybe" // Union Type

option = "no"

let opt: number | boolean

opt = 2 // Works, because can be of the number type
opt = false // Works, because can be of the boolean type
// opt = "Hi" Don't works because cannot be the string type

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet

let homePlanet: Planet

function checkPlanet(planet: Planet) {
   if (planet === "Terra") {
      console.log('We are in Earth')
   }
}

type GreetingCallback = (name: string) => void // Void = returns nothing

function greet(callbackFct: GreetingCallback) {
   let name = "Miguel"
   callbackFct(name)
}

greet((name) => {
   alert(`Hello ${name}! Welcome to Miguel studies`)
})
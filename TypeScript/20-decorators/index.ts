/*
DECORATORS:

=> It's a special Typescript resource for declaration that can be attached to a class, a method, a property or a parameter
=> It's to add extra information about the statement we're decorating
=> Generally, we will use decorators, but we are not going to implement our own decorators
*/

/* function Decorator() {
   return function(target, key, descriptor) {
      descriptor.value = function (value: number) {
         console.log(`Calculating ${value} squared`)
         return Math.pow(value, 2)
      }
   }
} */

function Log() {
   return function(target, key, descriptor) {
      const originalMethod = descriptor.value

      descriptor. value = function(...args: any[]) {
         console.log('-------------------------------')
         console.log(`Calling the method ${key} with the parameters: ${JSON.stringify(args)}`) // Key = name of original method

         const result = originalMethod.apply(this, args)

         console.log(`The method ${key} returned the value: ${JSON.stringify(result)}`)
         console.log('-------------------------------')

         return result
      }
   }
}

class Planet {
   name: string

   constructor(name: string) {
      this.name = name
   }

   @Log()
   calculate(value: number) {
      // ...
      console.log(`Calculating ${value} times 2`)
      return value * 2
   }

   @Log()
   invertName() {
      return this.name.split('').reverse().join('')
   }
}

const planet = new Planet('Earth')

const result = planet.calculate(5)

console.log(`Result: ${result}`)

planet.invertName()

// Examples for decorators applications: Angular, TypeORM and TypeGraphQL
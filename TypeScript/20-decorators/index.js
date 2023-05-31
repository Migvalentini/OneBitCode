/*
DECORATORS:

=> It's a special Typescript resource for declaration that can be attached to a class, a method, a property or a parameter
=> It's to add extra information about the statement we're decorating
=> Generally, we will use decorators, but we are not going to implement our own decorators
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* function Decorator() {
   return function(target, key, descriptor) {
      descriptor.value = function (value: number) {
         console.log(`Calculating ${value} squared`)
         return Math.pow(value, 2)
      }
   }
} */
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('-------------------------------');
            console.log(`Calling the method ${key} with the parameters: ${JSON.stringify(args)}`); // Key = name of original method
            const result = originalMethod.apply(this, args);
            console.log(`The method ${key} returned the value: ${JSON.stringify(result)}`);
            console.log('-------------------------------');
            return result;
        };
    };
}
class Planet {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculating ${value} times 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log()
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet('Earth');
const result = planet.calculate(5);
console.log(`Result: ${result}`);
planet.invertName();

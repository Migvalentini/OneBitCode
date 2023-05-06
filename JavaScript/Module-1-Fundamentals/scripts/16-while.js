/*
WHILE:

=> While a condition, do something multiple times
=> Syntax:
   while (condition) {
      // ...
   }
*/

let speed = 80

while (speed > 0) {
   alert(`The car is going to ${speed} km/h`)
   speed -= 20
}

alert("The car stopped")
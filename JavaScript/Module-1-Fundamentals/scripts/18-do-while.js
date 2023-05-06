/*
DO WHILE:

=> Do something while condition
=> Syntax:
   do {
      // ...
   } while (condition)
*/

let speed = 0

do {
   alert("The vehicle speed is " + speed + " km/h")
   speed -= 20
} while (speed > 0)

alert("Final speed: " + speed + " km/h")
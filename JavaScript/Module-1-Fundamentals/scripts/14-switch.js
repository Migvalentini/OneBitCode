/*
SWITCH:

=> Syntax:
   switch (expression) {
      case "a":
         // ...
      case "b":
         // ...
         break
      case "c":
         // ...
      default:
         // ...
   }
*/
const result = prompt("Enter a alternative:\na)\nb)\nc)")

switch (result) {
   case "a":
      alert("The result is 'a'")
      break
   case "b":
      alert("The result is 'b'")
      break
   case "c":
      alert("The result is 'c'")
      break
   default:
      alert("Finishing")
}
console.log("🚀 ~ file: 14-switch.js:32 ~ result:", result)

console.log("🚀 ~ file: 14-switch.js:34 ~ result:", result)

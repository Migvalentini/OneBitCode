const number1 = parseFloat(prompt("Enter the first number:"))
const number2 = parseFloat(prompt("Enter the second number:"))
const addition = number1 + number2
const subtraction = number1 - number2
const multiplication = number1 * number2
const division = number1 / number2

alert(
   number1 + " + " + number2 + " = " + (addition) + "\n" +
   number1 + " - " + number2 + " = " + (subtraction) + "\n" +
   number1 + " * " + number2 + " = " + (multiplication) + "\n" + 
   number1 + " / " + number2 + " = " + (division)
)
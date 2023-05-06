const number = parseFloat(prompt("Enter a number to discover your multiplication table:"))
let result = ""

for (let c = 1; c <= 20; c++) {
   result += "=> " + number + " * " + c + " = " + number * c + "\n"
}

alert(result)
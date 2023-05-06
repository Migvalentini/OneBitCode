let money = parseFloat(prompt("Enter your initial money:"))
let option = 0

do {
   option = parseFloat(prompt(
      "Available Money: " + money + "$\n" +
      "Enter a option:\n" +
      "1) Add Money\n" + 
      "2) Remove Money\n" +
      "3) Exit"
   ))
   switch (option) {
      case 1:
         money += parseFloat(prompt("Enter how much money you want add:"))
         break
      case 2:
         money -= parseFloat(prompt("Enter how much money you want remove:"))
         break
      case 3:
         alert("You finished the program and you have " + money + "$")
         break
      default:
         alert("[ERROR] Invalid Option")
   }
} while (option !== 3)


let option = 0

do {
   option = parseFloat(prompt(
      "INTERACTIVE MENU:\n" +
      "Option 1:\n" +
      "Option 2:\n" +
      "Option 3:\n" +
      "Option 4:\n" +
      "Option 5: Exit"
   ))
   switch (option) {
      case 1:
         alert("You chosen the first option")
         break
      case 2:
         alert("You chosen the second option")
         break
      case 3:
         alert("You chosen the third option")
         break
      case 4:
         alert("You chosen the forth option")
         break
      case 5:
         alert("You chosen finish the program. Finishing...")
         break
      default:
         alert("[ERROR] Invalid Option!")
   }
} while (option !== 5)
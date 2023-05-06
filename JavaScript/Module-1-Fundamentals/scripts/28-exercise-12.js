let cards = []
let option = ""

while (option !== "3") {
   option = prompt(
      "Number of Cards: " + cards.length + "\n" +
      "Options:\n" +
      "1) Add a card\n" +
      "2) Pull a card\n" +
      "3) Exit"
   )
   switch (option) {
      case "1":
         const new_card = prompt("Enter the new card:")
         cards.unshift(new_card)
         break
      case "2":
         if (cards.length != 0) {
            alert("The pulled card was " + cards[0])
            cards.shift()
         } else {
            alert("The deck of cards is empty!")
         }
         break
      case "3":
         alert("Exiting...")
         break
      default:
         alert("[ERROR] Invalid Answer")
   }
}
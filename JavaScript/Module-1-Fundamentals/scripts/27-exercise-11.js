let queue = []
let option = 0

while (option != 3) {
   let clients = ""
   for (let i = 0; i < queue.length; i++) {
      clients += (i + 1) + "° " + queue[i] + "\n"
   }
   option = parseFloat(prompt(
   "INTERACTIVE MENU\n" +
   "Clients:\n" + 
   clients +
   "Options:\n" +
   "1) New Client\n" +
   "2) Consult Client\n" +
   "3) Exit"
   ))
   switch (option) {
      case 1:
         const new_client = prompt("Enter the name of the new client:")
         queue.push(new_client) 
         break
      case 2:
         if (queue.length != 0) {
            alert("The consulted client was " + queue[0])
         } else {
            alert("The queue is empty!")
         }
         queue.shift()
         break
      case 3:
         alert("Exiting...")
         break
      default:
         alert("[ERROR] Invalid Answer!")
   }
}
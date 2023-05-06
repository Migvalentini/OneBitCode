let properties = []
let show_properties = ""
let option = ""

while (option !== "3") {
   option = prompt(
      "Registered Properties: " + properties.length + "\n" +
      "Options:\n" +
      "1) Save Property\n" +
      "2) Show Properties\n" +
      "3) Exit"
   )
   switch (option) {
      case "1":
         let property = {}
         property.name = prompt("Enter the owner name:")
         property.number_rooms = prompt("Enter the number of rooms:")
         property.number_bathroom = prompt("Enter the number of bathrooms:")
         property.has_garage = prompt("Enter if has a garage ['yes'/'no']")
         properties.push(property)
         show_properties += "Owner Name: " + property.name + "\n" +
         "Number of Rooms: " + property.number_rooms + "\n" + 
         "Number of Bathrooms: " + property.number_bathroom + "\n" +
         "Has a garagae: " + property.has_garage + "\n\n"
         alert("Successfully registered property")
         break
      case "2":
         alert(show_properties)
         break
      case "3":
         alert("Exiting...")
         break
      default:
         alert("[ERROR] Invalid Answer!")
   }
}

console.log(properties)
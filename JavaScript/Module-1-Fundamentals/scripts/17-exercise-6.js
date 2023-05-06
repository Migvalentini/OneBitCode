const tourist_name = prompt("Enter your name:")
let visited_city = "abc"
let cities = "\n"
let number_cities = 0

while (visited_city !== "no") {
   visited_city = prompt("Have you even visited any cities?")
   if (visited_city === "yes") {
      cities += " - " + prompt("Enter city name:") +"\n"
      number_cities ++
   }
}

alert(
   "Your name is " + tourist_name + 
   "\nYou visited" + number_cities + "cities" + 
   "\nThe cities you have already visited are:"+cities
)
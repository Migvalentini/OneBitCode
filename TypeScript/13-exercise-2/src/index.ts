const planets = []

function addPlanet(name: string, coords: [number, number, number, number], 
   situation: "inhabited" | "habitable" | "uninhabitable" | "uninhabited")  {
      

}

function firstMenu() {

}

function secondMenu() {

}

function thirdMenu() {

}

function fourthMenu() {

}

function fifthMenu() {

}

let option = 0

while (option !== 6) {
   let menu = `Enter a option:
   1 - Add Planet
   2 - Update Status of a Planet
   3 - Add Satellite to a Planet
   4 - Remove Satellite from a Planet
   5 - List Saved Planets
   6 - Exit`

   let option = Number(prompt(menu))

   switch (option) {
      case 1:
         firstMenu()
         break
      case 2:
         secondMenu()
         break
      case 3:
         thirdMenu()
         break
      case 4:
         fourthMenu()
         break
      case 5: 
         fifthMenu()
         break
      default:
         alert('Invalid Option, Enter a Correct!')
         break
   }
}
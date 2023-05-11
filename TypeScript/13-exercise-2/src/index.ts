const planets: Planet[] = []

type PlanetSituation = "inhabited" | "habitable" | "uninhabitable" | "uninhabited"
type PlanetCoordinates = [number, number, number, number]
type Planet = {
   name: string,
   situation: PlanetSituation,
   coordinates: PlanetCoordinates
   satellites: string[]
}

function addPlanet(name: string, coords: PlanetCoordinates, situation: PlanetSituation)  {
   planets.push({
      name,
      situation,
      coordinates: coords,
      satellites: []
   })

   alert(`Planet Registered: 
   Name: ${name}
   Coordinates: ${coords}
   Situation: ${situation}`)
}

function findPlanet(name: string) {
   const planet = planets.find(planet => planet.name === name)
   
   return planet ?? false
}

function promptValidPlanet(callback: (planet: Planet) => void) {
   const planetName = prompt("Enter Planet Name")
   const planet = findPlanet(planetName)

   if (planet) {
      callback(planet)
   } else {
      alert('Planet not found! Returning to menu...')
   }
}

function promptValidSituation() {
   let situation: PlanetSituation
   let validSituation = false

   while(!validSituation) {
      const situationInput = prompt("Enter Planet Situation \n1 - inhabited \n2 - habitable \n3 - uninhabitable \n4 - uninhabited")

      switch(situationInput) {
         case '1':
            situation = "inhabited"
            validSituation = true
            break
         case '2':
            situation = "habitable"
            validSituation = true
            break
         case '3':
            situation = "uninhabitable"
            validSituation = true
            break
         case '4':
            situation = "uninhabited"
            validSituation = true
            break
         default:
            alert('Invalid Situation')
            break
      }
   }

   return situation
}

function updatePlanetSituation(situation: PlanetSituation, planet: Planet) {
   planet.situation = situation

   alert(`The situation of ${planet.name} was updated to ${situation}`)
}

function addSatellite(satellite: string, planet: Planet) {
   planet.satellites.push(satellite)
}

function removeSatellite(name: string, planet: Planet) {
   planet.satellites = planet.satellites.filter(satellite => satellite !== name)

   alert(`The satellite ${name} was removed from the planet ${planet.name}`)
}

function firstMenu() {
   const planetName = prompt("Enter Planet Name: ")
   const coordinate1 = Number(prompt('Enter the coordinate 1:'))
   const coordinate2 = Number(prompt('Enter the coordinate 2:'))
   const coordinate3 = Number(prompt('Enter the coordinate 3:'))
   const coordinate4 = Number(prompt('Enter the coordinate 4:'))

   const situation = promptValidSituation()

   const confirmation = confirm(`Do you confirm the addition of ${planetName}?
   Coordinates: (${coordinate1}, ${coordinate2}, ${coordinate3}, ${coordinate4})
   Situation: ${situation}`)

   if (confirmation) {
      addPlanet(planetName, [coordinate1, coordinate2, coordinate3, coordinate4], situation)
   }
}

function secondMenu() {
   promptValidPlanet(planet => {
      const situation = promptValidSituation()
      updatePlanetSituation(situation, planet)
   })
}

function thirdMenu() {
   promptValidPlanet(planet => {
      const satellite = prompt('Enter Satellite Name: ')
      addSatellite(satellite, planet)
      console.log(planets)
   })
}

function fourthMenu() {
   promptValidPlanet(planet => {
      const satellite = prompt('Enter Satellite Name: ')
      removeSatellite(satellite, planet)
      console.log(planets)
   })
}

function fifthMenu() {
   let list = 'Planets:\n'

   planets.forEach(planet =>{
      const [a, b, c, d] = planet.coordinates

      list += `
      Name: ${planet.name}
      Coordinates: (${a}, ${b}, ${c}, ${d})
      Situation: ${planet.situation}
      Satellites: ${planet.satellites.length}\n`

      planet.satellites.forEach(satellite => {
         list += `        - ${satellite}\n`
      })
   })

   alert(list)
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

   option = Number(prompt(menu))

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
      case 6:
         alert('Exiting...')
         break
      default:
         alert('Invalid Option, Enter a Correct!')
         break
   }
}
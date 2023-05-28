/*
CREATING INTERFACES: 

=> Another way to create types in Typescript
=> Mostly used with objects
*/

/* type Planet = {
   name: string,
   satellites: string[]
} */

interface CelestialBody {
   name: string,
   mass: number
}

interface Star extends CelestialBody {
   age: number,
   planets: Planet[]
}

interface Planet extends CelestialBody {
   population: number,
   createSatellite: (name: string) => void
}

let sum: Star

sum.name = "Sun"
sum.mass = 1.989e30
sum.age = 4.603e9
sum.planets = []

type Asteroid = CelestialBody & {
   size: number
}

/*
Is the same as, but harder to see:
let asteroid: Asteroid
asteroid.name = 'Asteroid'*/

class MilkWayPlanet implements Planet { // Must have all Planet type elements
   name: string
   mass: number
   population: number

   createSatellite(name: string) {
      // ...
   }

   constructor(name: string, mass: number, population: number) {
      this.name = name
      this.mass = mass
      this.population = population
   }
}

/* type Asteroid = { ERROR: Duplicate identifier 'Asteroid'.
   name: string
} */

interface Planet {
   satellites?: string[] // Doesn't cause error, because implements the satellites array
   idk?: number
}
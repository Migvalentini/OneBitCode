function sendSpaceship(name: string, captain: string ) {
   const spaceship = {
      name, 
      captain,
      speed: 20,
      inMission: true,
      crew: []
   }

   alert(`The spaceship ${spaceship.name} commanded by ${spaceship.captain} was send in a mission`)

   return spaceship
}

function accelerateSpaceship(targetSpeed: number, spaceship: {name: string, speed: number}) {
   if (spaceship.speed > targetSpeed) {
      alert(`Reducing the speed of the ship ${spaceship.name} to ${targetSpeed}...`)
   } else if (spaceship.speed < targetSpeed) {
      alert(`Increasing the speed of the ship ${spaceship.name} to ${targetSpeed}...`)
   } else {
      alert(`Maintaining the speed of the ship ${spaceship.name}...`)
   }
}

const spaceshipName = prompt('Enter the name of the spaceship to be sent:')
const spaceshipCaptain = prompt("Enter the ship's captain's name:")

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt(`Enter the speed you want to accelerate:`))

accelerateSpaceship(speed, currentShip)
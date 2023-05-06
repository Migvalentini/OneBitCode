const spaceship1 = {
   name: 'X-Wing',
   speed: 0
}

function accelerateShip(spaceship: { name: string; speed: number }, speed: number) {
   spaceship.speed += speed
}

accelerateShip(spaceship1, 50)
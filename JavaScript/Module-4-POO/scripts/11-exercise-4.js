const Mage = require('./11-exercise-4-mage.js')
const Warrior = require('./11-exercise-4-warrior.js')
const Thief = require('./11-exercise-4-thief.js')

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({arthur, beatrice, cain})

cain.switch_position()
arthur.attack(beatrice)
beatrice.attack(arthur)

console.table({arthur, beatrice, cain})

cain.attack(arthur)
arthur.increase_life(arthur)
beatrice.attack(cain)

console.table({arthur, beatrice, cain})
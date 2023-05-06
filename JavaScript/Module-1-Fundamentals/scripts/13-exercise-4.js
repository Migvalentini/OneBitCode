const attacker_name = prompt("Enter the attacker's name:")
const attacker_power = parseFloat(prompt("Enter the attacker power:"))
const defender_name = prompt("Enter the defender's name:")
const defender_life = parseFloat(prompt("Enter the defender's hit points:"))
const defender_power = parseFloat(prompt("Enter the defender's power of defense:"))
const defender_shield = prompt("Enter 'true' if the defender has a shield and 'false' if not:")
let damage

if (attacker_power > defender_power && defender_shield === 'false') {
   damage = attacker_power - defender_power
} else if (attacker_power > defender_power && defender_shield === 'true') {
   damage = (attacker_power - defender_power) / 2
}

defender_life -= damage

alert(`The attacker ${attacker_name} has ${attacker_power} attack power`)
alert(`The defender ${defender_name} has ${defender_power} defense power and has ${defender_life} life hit points`)
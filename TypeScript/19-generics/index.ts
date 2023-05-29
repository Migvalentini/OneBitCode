/* 
GENERICS:

=> A different way of allowing us to pass arguments to a function or class that are types
=> Generally used when your input type is relevant in the function
*/

function first(array) {
   return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
   return array[array.length - 1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']
const numbers = [1, 2, 3, 4, 5]

const firstPilot = first(pilots) // type = any
const firstNumber = first(numbers) // type = any

const lastPilot = last(pilots) // type = string | undefined
const lastNumber = last(numbers) // type = number | undefined

interface Ship {
   name: string
   pilot: string
}
 
interface Fighter extends Ship {
   weapons: number
   shields: number
}
 
interface Transport extends Ship {
   capacity: number
}
 
interface Speeder extends Ship {
   speed: number
   acceleration: number
}

// cloneShip<ShipType extends { name: string, pilot: string } or
function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
   const newShip = ship
   newShip.name = newName
   newShip.pilot = newPilot
   return newShip
}
 
const falcon: Ship = {
   name: 'Millenium Falcon',
   pilot: 'Han'
}
 
const xWing: Fighter = {
   name: 'Red Five',
   pilot: 'Luke',
   weapons: 4,
   shields: 1
}
 
// A cópia funciona, porém a tipagem está incorreta pois a ambas é atribuído o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')



interface EnemyShip {
   name: string
   pilot: string
   flag?: string
}
 
// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuído corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo Ship
//enemyCopy.flag = 'Imperial' ERROR = Property 'flag' does not exist on type 'Ship'.
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial'
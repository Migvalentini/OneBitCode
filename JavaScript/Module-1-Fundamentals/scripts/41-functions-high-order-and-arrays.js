const character = [
   { level: 42, name: "Thrall", race: "Orc", class: "Shaman" },
   { level: 28, name: "Garrosh", race: "Orc", class: "Warrior" },
   { level: 35, name: "Varok", race: "Orc", class: "Warrior" },
   { level: 35, name: "Uther", race: "Human", class: "Paladin" },
   { level: 26, name: "Jaina", race: "Human", class: "Maga" },
   { level: 39, name: "Tyrande", race: "Night Elf", class: "Priestess" },
   { level: 29, name: "Muradin", race: "Dwarf", class: "Warrior" },
 ]

 // MAP

/* const names = []

for (let i = 0; i < character.length; i ++) {
   names.push(character[i].name)
} */

const names = character.map(function (character) {
   return character.name
})

console.log("MAP")
console.log(names) // ["Thrall", "Garrosh", "Varok", "Uther", "Jaina", "Tyrande", "Muradin"]

// FILTER

/* const orcs = []

for (let i = 0; i < character.length; i++) {
   if (character[i].race === "Orc") {
      orcs.push(character[i])
   }  
} */

const orcs = character.filter(function (character) {
   return character.race === "Orc"
})

console.log("FILTER")
console.log(orcs) /* 
{level: 42, name: 'Thrall', race: 'Orc', class: 'Shaman'}
{level: 28, name: 'Garrosh', race: 'Orc', class: 'Warrior'}
{level: 35, name: 'Varok', race: 'Orc', class: 'Warrior'} */

// REDUCE

const total_level = character.reduce(function (accumulated_value, character) {
   return accumulated_value + character.level
}, 0)

console.log("REDUCE")
console.log(total_level) // 234

const races = character.reduce(function (accumulated_value, character) {
   if (accumulated_value[character.race]) {
      accumulated_value[character.race].push(character)
   } else {
      accumulated_value[character.race] = [character]
   }

   return accumulated_value
}, {})

console.log("REDUCE")
console.log(races)

// SORT

const ordered_character = character.slice().sort(function (a, b) { // Slice = create a copy of original array
   return a.level - b.level // Ascendent Order
   //return b.level - a.level Descendent Order

})

console.log("SORT")
console.log(character)
console.log(ordered_character)
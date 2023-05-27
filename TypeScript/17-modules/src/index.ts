//npm i lodash
//npm i --save-dev @types/lodash

import { Spaceship } from "./spaceship"
import * as lodash from "lodash"

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: "X-Wing",
  pilot: "Luke Skywalker",
  speed: 500,
  weapons: 2
}

console.log(lodash.camelCase(xwing.pilot))
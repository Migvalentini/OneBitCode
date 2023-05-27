//npm i lodash
//npm i --save-dev @types/lodash
import * as lodash from "lodash";
let xwing = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    speed: 500,
    weapons: 2
};
console.log(lodash.camelCase(xwing.pilot));

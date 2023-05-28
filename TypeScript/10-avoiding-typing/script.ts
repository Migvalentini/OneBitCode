function sendSpaceship(spaceship: {pilot: string, copilot?: string}) { // ? = optional
   // ...
}

sendSpaceship({pilot: 'Miguel', copilot: 'Vitor'})

sendSpaceship({pilot: 'Luke'})

let unknownVariable: unknown

unknownVariable = 'Hello'
unknownVariable = 20
unknownVariable = []
unknownVariable = false

let text: string = 'Hello'

// text = unknownVariable => error

unknownVariable = text // not error

let anyVariable: any // disable Typescript; equal to Javascript; not recommended

anyVariable = 'Hello'
anyVariable = 20
anyVariable = []
anyVariable = false

text = anyVariable // not error

/* function check(test) {
   if (test) {
      
   } else {
      let neverVariable: never

      let text2 = neverVariable
      text2 = ''

      return neverVariable
   }
} */
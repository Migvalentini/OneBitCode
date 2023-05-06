/* console.log('Program Started')

const timeoutId = setTimeout(() => {
   console.log('3 seconds have passed since the start of the program')
}, 1000 * 3) //milliseconds

clearTimeout(timeoutId) */

let seconds = 0

const intervalId = setInterval(() => {
   seconds += 1
   console.log(`Seconds elapsed: ${seconds}`)
   if (seconds >= 10) {
      clearInterval(intervalId)
      console.log('Timer is over')
   }
}, 1000 * 1)
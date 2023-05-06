async function asyncSum(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments for sum must be of type number')
   }
   return a + b
}

/* async function execute() {
   asyncSum(50, 33).then(result => {
      console.log(result)
   })
} */

//Same result as: 

async function execute() {
   try {
      const result = await asyncSum(50, 20) // AWAIT = used to wait for the execution of a promise
      console.log(result)
   } catch (error) {
      console.log(error)
   }
   // Don't do procedures after that to not block the await and the code
}

execute()
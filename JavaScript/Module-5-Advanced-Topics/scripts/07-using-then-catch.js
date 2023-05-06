/*
THEN:

=> Use with resolved promises

CATCH:

=> Use with rejected promise
=> Handle promise rejection
=> Similar to catch from try/catch/finally

FINALLY:

=> Use with finished promise
=> Similar to finally from try/catch/finally
*/

function execute() {
   return new Promise((resolve, reject) => {
      console.log('The promise is been executed')
      setTimeout(() => {
         if (false) {
            reject(false)
         } else {
            console.log('The promise is been resolved')
            resolve(42)
         }
      }, 1000 * 2);
   })
}

execute().then((result) => {
   console.log(`The promise was resolved. The result is ${result}`)
}).catch((error) => {
   console.log(`The promise was rejected. The reason is ${error}`)
}).finally(() => {
   console.log('The promise is been finished')
})
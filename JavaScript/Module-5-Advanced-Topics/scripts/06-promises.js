/* 
PROMISES:

=> Javascript API that provides a way for us to work with asynchronous code
=> object that has a function associated with it that will be executed asynchronously and will return a value that we can use it
=> Status:
   - Pending
   - Resolved
   - Rejected
   - Finished
=> Resolve parameter:
   - Close the promise and say everything is ok
*/

/* const p = new Promise((resolve, reject) => {
   console.log('The promise is running')
   setTimeout(() => {
      if (true) {
         reject(false)
      }
      console.log('The promise is done')
      resolve(true)
   }, 1000 * 2);
})

console.log(p)

setTimeout(() => {
   console.log(p)
}, 1000 * 3); */

function execute() {
   return new Promise((resolve, reject) => {
      console.log('The promise is been executed')
      setTimeout(() => {
         console.log('The promise is been resolved')
         resolve('Result')
      }, 1000);
   })
}

const p = execute()

console.log(p)

setTimeout(() => {
   console.log(p)
}, 1000 * 2);
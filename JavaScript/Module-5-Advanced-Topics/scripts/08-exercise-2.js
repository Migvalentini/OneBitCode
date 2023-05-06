const spanResult = document.querySelector('#result')
const calculateBtn = document.querySelector('#calculate-btn')

function calculateIMC(weight, height) {
   return new Promise((resolve, reject) => {
      if (typeof weight === 'number' && typeof height === 'number') {
         resolve(weight / (height * height))
      } else {
         reject('Invalid arguments')
      }
   })
}

calculateBtn.addEventListener('click', () => {
   const weight = Number(document.querySelector('#weight-input').value)
   const height = Number(document.querySelector('#height-input').value)

   calculateIMC(weight, height)
      .then((result) => {
         if (result < 18.5) {
            spanResult.innerHTML = "You are underweight"
            console.log(`Your IMC is : ${result}`)
         } else if (result < 24.9) {
            spanResult.innerHTML = "You are normal weight"
            console.log(`Your IMC is : ${result}`)
         } else if (result < 29.9) {
            spanResult.innerHTML = "You are overweight"
            console.log(`Your IMC is : ${result}`)
         } else if (result < 39.9) {
            spanResult.innerHTML = "You are obese"
            console.log(`Your IMC is : ${result}`)
         } else if (result > 40) {
            spanResult.innerHTML = "You are severe obesity"
            console.log(`Your IMC is : ${result}`)
         } 
      })
      .catch((error) => {
         spanResult.innerHTML = 'Invalid input values'
         console.log(error.message)
      })
})
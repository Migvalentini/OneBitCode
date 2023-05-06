async function calculateIMC(weight, height) {
   if (typeof weight === 'number' && typeof height === 'number') {
      return Math.floor(weight / (height * height))
   } else {
      Promise.reject('Invalid arguments')
   }
}

async function showIMC(weight, height) {
   try {
      const result = await calculateIMC(weight, height)
      console.log(`Your IMC is : ${result}`)
      if (result < 18.5) {
         console.log("You are underweight")
      } else if (result < 24.9) {
         console.log("You are normal weight")
      } else if (result < 29.9) {
         console.log("You are overweight")
      } else if (result < 39.9) {
         console.log("You are obese")
      } else if (result > 40) {
         console.log("You are severe obesity")
      } 
   } catch (error) {
      console.log('Invalid input values')
      console.log(error.message)
   }
}

showIMC(50, 1.8)
showIMC(70, 1.8)
showIMC(90, 1.8)
showIMC(90, 1.6)
showIMC(100, 1.5)
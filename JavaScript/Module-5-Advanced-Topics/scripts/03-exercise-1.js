document.querySelector('#submit-input').addEventListener('click', (event) => {
   event.preventDefault()
   const name = document.querySelector('#name-input').value
   const email = document.querySelector('#email-input').value
   const password = document.querySelector('#password-input').value
   try {
      validateEmail(email)
      validatePassword(password)
      alert(`Form Sent Successfully!
      Name: ${name}
      Email: ${email}
      Password: ${password}`)
   } catch (error) {
      alert(error.message)
   }
})

function validateEmail(email) {
   if (!email.match(/^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9_]{2,}\.[a-zA-Z0-9_]{2,}$/)) {
      const error = new Error('Invalid Email')
      error.input = 'email'
      throw error
   }
}

function validatePassword(password) {
   if (
      password.length < 8 ||
      !password.match(/[A-Z]/) ||
      !password.match(/[a-z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[^\s]/)
   ) {
      const error = new Error('Invalid Password')
      error.input = 'password'
      throw error
   }
}
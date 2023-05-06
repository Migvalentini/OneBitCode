function register(ev) {
    console.log(ev)
    const section = ev.currentTarget.parentNode.children
    const username = section.username.value
    const password = section.password.value
    const password_confirmation = section.passwordConfirmation.value

    if (password === password_confirmation) {
        alert('User ' + username + ' registered')

    } else {
        alert("Password don't match")
    }
}

const button = document.getElementById('register_button')

button.addEventListener('click', register)

function remove_listener() {
    button.removeEventListener('click', register)
    alert('Event Removed')
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})
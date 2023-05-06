function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const password_confirmation = element.children.passwordConfirmation.value

    if (password === password_confirmation) {
        alert("User " + username + " registered")
        element.children.username.value = ''
        element.children.password.value = ''
        element.children.passwordConfirmation.value = ''
    } else {
        alert("The passwords are invalids!")
    }
}
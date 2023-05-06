const input = document.querySelector('#input')

document.querySelector('#value').addEventListener('click', function () {
    input.value = 'Hello World'

    console.log(input.value) // Real Time
    console.log(input.getAttribute('value')) // HTML Value
})

document.querySelector('#type').addEventListener('click', function() {
    // input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'radio')
})

document.querySelector('#placeholder').addEventListener('click', function() {
    input.placeholder = 'Enter something...'
})

document.querySelector('#disable').addEventListener('click', function() {
    input.setAttribute('disabled', !input.disabled)
})

document.querySelector('#data').addEventListener('click', function() {
    const data = input.dataset.somethingElse // HTML = kebab case, JS = camel case
    console.log("The data-something-else attribute value is: " + data)
    input.dataset.somethingElse = 'another value'
    console.log("The data-something attribute value is now: " + input.dataset.somethingElse)
})
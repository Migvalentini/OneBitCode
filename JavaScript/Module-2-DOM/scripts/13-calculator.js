const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('#input')
const result_input = document.querySelector('#result')

const allowed_keys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(char_key_btn) {
    char_key_btn.addEventListener('click', function() {
        const value = char_key_btn.dataset.value
        input.value += value
    })
})

document.querySelector('#clear').addEventListener('click', function() {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(event) {
    event.preventDefault()
    if (allowed_keys.includes(event.key)) {
        input.value += event.key
        return
    }
    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (event.key === 'Enter') {
        calculate()
    }
})

document.querySelector('#equal').addEventListener('click', calculate)

function calculate() {
    result_input.value = 'ERROR'
    result_input.classList.add('error')
    
    const result = eval(input.value) // EVAL = DANGEROUS FUNCTION, BE CAREFUL...

    result_input.value = result
    result_input.classList.remove('error')
}

document.querySelector('#copyToClipboard').addEventListener('click', function(event) {
    const button = event.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(result_input.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.querySelector('#themeSwitcher').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border_color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border_color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})
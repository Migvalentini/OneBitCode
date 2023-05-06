const input = document.querySelector('#input')
const result_input = document.querySelector('#result')

const allowed_keys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function clear_button(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
  }

function clear() {
    input.value = ''
    input.focus()
}

function check_keys(event) {
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

}

function calculate() {
    result_input.value = 'ERROR'
    result_input.classList.add('error')
    
    const result = eval(input.value) // EVAL = DANGEROUS FUNCTION, BE CAREFUL...

    result_input.value = result
    result_input.classList.remove('error')
}

export { clear_button, clear, check_keys, calculate }
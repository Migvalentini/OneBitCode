const result_input = document.querySelector('#result')

export default function copy_to_clipboard(event) {
    const button = event.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(result_input.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}
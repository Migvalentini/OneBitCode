import { switch_theme } from "./15-exercise-2-switch-theme.js"
import copy_to_clipboard from "./15-exercise-2-clipboard.js"
import { clear_button, clear, check_keys, calculate } from "./15-exercise-2-calculate.js"


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", clear_button)
})
input.addEventListener('keydown', check_keys)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#equal').addEventListener('click', calculate)
document.querySelector('#copyToClipboard').addEventListener('click', copy_to_clipboard)
document.querySelector('#themeSwitcher').addEventListener('click', switch_theme)
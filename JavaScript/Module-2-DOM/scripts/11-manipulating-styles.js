function use_light_theme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function use_dark_theme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switch_theme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.querySelector('#lightBtn').addEventListener('click', use_light_theme)
document.querySelector('#darkBtn').addEventListener('click', use_dark_theme)
document.querySelector('#switchBtn').addEventListener('click', switch_theme)
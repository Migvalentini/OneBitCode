function create_input(id, value, name, type, placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

function create_label(content, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = content
    return label
}

const button = document.querySelector('#add_tech_btn')
const form = document.querySelector('#form')
const developers = []
let input_rows = 0

button.addEventListener('click', function (event) {
    event.preventDefault()

    const ul = document.querySelector('#ul')
    const br = document.createElement('br')

    const li = document.createElement('li')
    const row_index = input_rows
    input_rows++
    li.id = 'input_row_' + row_index
    li.className = 'input_row'    
    
    const label_name = create_label('Technology Name: ', 'tech_name_' + row_index)
    const technology_name = create_input('tech_name_' + row_index, null, 'tech_name', 'text', 'Enter your Name: ')
    
    const time_exp_label = create_label('Experience: ')
    const id1 = 'exp_radio_' + row_index + '.1'
    const time_exp_input_1 = create_input(id1, '0-2 years', 'time_exp_' + row_index, 'radio')
    const time_exp_label_1 = create_label('0-2 years', id1)
    
    const id2 = 'exp_radio_' + row_index + '.2'
    const time_exp_input_2 = create_input(id1, '3-4 years', 'time_exp_' + row_index, 'radio')
    const time_exp_label_2 = create_label('3-4 years', id2)
    
    const id3 = 'exp_radio_' + row_index + '.3'
    const time_exp_input_3 = create_input(id1, '5+ years', 'time_exp_' + row_index, 'radio')
    const time_exp_label_3 = create_label('5+ years', id3)

    const remove_button = document.createElement('button')
    remove_button.type = 'button'
    remove_button.innerText = 'Remove Row'
    remove_button.addEventListener('click', function () {
        ul.removeChild(li)
    })
    
    li.append(
        label_name, technology_name,
        time_exp_label,
        time_exp_input_1, time_exp_label_1, 
        time_exp_input_2, time_exp_label_2, 
        time_exp_input_3, time_exp_label_3, 
        remove_button
    )
    
    ul.append(li)
})

const register_button = document.querySelector('#register_btn')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const full_name_input = document.querySelector('#name')
    const input_rows = document.querySelectorAll('.input_row')

    let technologies = []
    input_rows.forEach(function (row) {
        const tech_name = document.querySelector('#' + row.id + ' input[name="tech_name"]').value
        const tech_exp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: tech_name, exp: tech_exp })
    })
        const new_dev = { full_name: full_name_input.value, technologies }
        developers.push(new_dev)
        alert('New Dev Registered Successfully')

        full_name_input.value = ''
        input_rows.forEach(function (row) {
            row.remove()
        })

    console.log(developers)
})

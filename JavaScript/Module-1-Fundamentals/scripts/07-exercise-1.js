const first_name = prompt("Enter your first name: ")
const last_name = prompt("Enter your last name:")
const field_study = prompt("Enter your field os study:")
const year_birth = prompt("Enter your year of birth:")
const date = new Date()
const actual_year = date.getFullYear()
const age = actual_year - year_birth

alert(`Your name is ${first_name} ${last_name}\nYour field of study is ${field_study}\nYour age is ${age} years`)
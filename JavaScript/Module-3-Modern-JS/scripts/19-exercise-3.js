const dayjs = require("dayjs")
require("dayjs/locale/pt-br")
dayjs.locale('pt-br')

function birth(birth) {
    const year_birth = dayjs(birth)
    const today = dayjs()
    const age = today.diff(year_birth, 'years')
    const next_birthday = dayjs(year_birth).add(age + 1, 'year')
    const days_until_birthday = next_birthday.diff(today, 'days') + 1

    console.log(`Year of birth: ${year_birth.format('DD/MM/YYYY')}`) 
    console.log(`Actual day: ${today.format('DD/MM/YYYY')}`) 
    console.log(`Your age is ${age} years`)
    console.log(`Your next birthday is: ${next_birthday.format('DD/MM/YYYY')}`)
    console.log(`${days_until_birthday} days until your birthday`)
}

birth("03/07/2006")
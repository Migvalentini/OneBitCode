import { Component } from "./09-exercise-3-component.js"
import { Input } from "./09-exercise-3-input.js"
import { Label } from "./09-exercise-3-label.js"
import { Form } from "./09-exercise-3-form.js"

const title = new Component('h1', 'body', { textContent : 'Hello World'})

console.log(title)

title.render()
title.tag = 'h3'
title.build().render()

const form = new Form('body')
const label = new Label('Name: ', form, {htmlFor: 'nameInput'})
const input = new Input(form, { id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildren(input)
form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Date of Birth: ', {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)
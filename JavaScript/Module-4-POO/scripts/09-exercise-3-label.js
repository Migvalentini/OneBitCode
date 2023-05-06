import { Component } from "./09-exercise-3-component.js"

export class Label extends Component {
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent : text }))
    }
}
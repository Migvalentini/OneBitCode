import { Component } from "./09-exercise-3-component.js"

export class Form extends Component {
    constructor(parent, options) {
        super('form', parent, options)
    }

    addChildren(...children) {
        children.forEach(child => {
            this.get_element().appendChild(child.get_element())
        })
    }
}
export class Component {
    #element = null

    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    get_element() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component){
            this.parent.get_element().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}
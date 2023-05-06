class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    //method publish
    publish() {
        this.published = true
    }
}

// eragon = instance of Book class
const eragon = new Book('Eragon')
const eldest = new Book('Eldest')

eragon.publish()

console.log(eragon)
console.log(eldest)

// checks if a instance is of a class = true or false
console.log(eragon instanceof Book)
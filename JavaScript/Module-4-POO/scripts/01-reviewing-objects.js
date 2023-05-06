/* const book = {
    title: 'Eragon',
    pages: 489,
    published: true,
    in_stock: 20,
    tags: ['fantasy', 'adventure', 'medieval'],
    author: {
        name: 'Christopher Paolini'
    },
    add_on_stock(quantity) {
        this.in_stock += quantity
    }
    save: function() {
        // save on database
    } 
    
console.log(book)
book.add_on_stock(3)
}*/

// PascalCase
// Constructor Functions:
function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.in_stock = 0
    this.add_on_stock = function add_on_stock(quantity) {
        this.in_stock += quantity
    }
    this.save = function() {
        // save on database
    }
}

const author = { name: 'Christopher Paolini' }
const tags = ['fantasy', 'adventure', 'medieval']

const eragon = new Book('Eragon', 450, tags, author)

console.log(eragon)

const eldest = new Book('Eldest', 644, tags, author)

console.log(eldest)
const Author = require('./06-exercise-2-author')

const miguel = new Author('Miguel Valentini')

const post = miguel.write_post('Programming', 'Programming is very nice')

post.add_comments('Diego', 'That is fabulous!')
post.add_comments('Daniel', 'I love programming')

console.log(miguel)
console.log(post)
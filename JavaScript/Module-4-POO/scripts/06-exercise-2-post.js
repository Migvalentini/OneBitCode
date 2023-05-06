const Comment = require('./06-exercise-2-comment')

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.created_at = new Date()
    }

    add_comments(username, content){
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post
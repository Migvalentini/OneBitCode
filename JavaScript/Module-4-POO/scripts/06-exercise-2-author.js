const Post = require('./06-exercise-2-post')

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    write_post(title, body){
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author
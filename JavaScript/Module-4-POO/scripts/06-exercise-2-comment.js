class Comment {
    constructor(username, content){
        this.username = username
        this.content = content
        this.created_at = new Date()
    }
}

module.exports = Comment
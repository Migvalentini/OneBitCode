class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(this.email === email && this.password === password) {
            console.log('Successfully Registered Login')
        } else {
            console.log('Unsuccessfully Registered Login, please check your information')
        }
    }
}

const miguel = new User('Miguel Valentini', 'miguelvalentini2006@gmail.com', '1234')

miguel.login('miguelvalentini2006@gmail.com', '1234')
miguel.login('miguelvalentini2006@gmail.com', 'abcd')
miguel.login('mvalentini3@ucs.br', 'a1b2')

console.log(miguel)
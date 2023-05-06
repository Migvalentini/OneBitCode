/*
ACCESSORS GET AND SET:

=> The accessors are a resource for defining how we access an object's property
    - person.name
    - person.name = "Miguel"
=> With the get accessor we can modify the way the property is read
=> With the set accessor we can modify the way the property is changed by assignment
=> Also called getters and setters
=> Examples:
    - A class has a property that needs a check before its value is changed
    - A class has a private property that needs a read only public accessor 
*/

class Wallet {
    #amount
    #username

    constructor() {1
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('Username must be of type string')
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount) // get = we don't use ()

myWallet.username = 'Miguel'
myWallet.username += ' Valentini'

console.log(myWallet.username)

myWallet.username = true

console.log(myWallet.username)
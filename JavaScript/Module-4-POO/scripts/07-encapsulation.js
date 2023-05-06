/*
ENCAPSULATION:

=> Encapsulation is the principle of preventing certain classes from being accessed by an external context
=> In Javascript exists 2 encapsulation levels:
    - Public: when the attribute/method is accessible outside the class (standard level)
    - Private: when the attribute/method is only accessible within the class itself
=> To set an attribute or method as private we need use # at its name start
=> Every attribute or method that is not private will being automatically public
=> Examples:
    - A class have an attribute that is defined once during the construction by after can't be changed directly (using obj.attribute = 'new value')
    - A class have a main method that internally call a lot of another methods of the class itself that doesn't make sense individually
*/

class Account {
    #password
    #balance = 0

    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    get_balance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'user@email.com',
    password: '123456'
}

const my_account = new Account(user)

/* my_account.password = '98765'
my_account.balance = 123 */

console.log(my_account)
console.log(my_account.get_balance('user@email.com', '123456'))
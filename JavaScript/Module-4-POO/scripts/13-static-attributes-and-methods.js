/*
STATIC ATTRIBUTES AND METHODS:

=> They are attributes and methods defined by a class that don't depend on an instance to be used
=> They are accessed directly by the class rather than through an instance
=> Examples:
    - A class needs to define an attribute that is global, that is, that has the same value for all the instances
    - A model class of a database table where methods should be available even if no instances have been updated yet
*/

class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base Fee is ${Reservation.baseFee}`)
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()

const r1 = new Reservation(3, "201", 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, "202", 5)
console.log(r2)

console.log(`Premium Fee is $${Reservation.premiumFee}`)
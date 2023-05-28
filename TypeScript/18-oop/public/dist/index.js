/*
Public: accessible from anywhere, both within the class and outside of it
Private: accessible from the class members within the same class. Cannot be accessed from outside the class
Protected: accessible from the same class and its subclasses. Cannot be accessible from outside the class hierarchy
*/
class Spaceship {
    get name() {
        // ...
        return this._name;
    }
    set name(name) {
        // ...
        this._name = name;
    }
    constructor(name, captain) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Fighter extends Spaceship {
    constructor(name, captain, weapons) {
        super(name, captain);
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!');
        }
    }
    erase() {
        //this.name = '' Property 'name' is private and only accessible within class 'Spaceship'.
        this.captain = '';
        this.speed = 0;
    }
}
let ship = new Spaceship('USS Enterprise', 'James T. Kirk');
let ship2 = new Fighter('Big Spaceship', 'Miguel', 10);
//ship.speed = 50 Property 'speed' is protected and only accessible within class 'Spaceship' and its subclasses.
ship.accelerate(50, 10);
ship2.weapons = 20;
ship2.name = 'X-Wing';

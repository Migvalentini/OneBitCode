const Character = require('./11-exercise-4-character.js')

module.exports = class Warrior extends Character {
    constructor(name, life_points, attack_points, defense_points, shield_points) {
        super(name, life_points, attack_points, defense_points)
        this.shield_points = shield_points
        this.position = 'attacking'
    }

    attack(target_character) {
        if (target_character.position === 'attacking') {
            super.attack(target_character)
        }
    }

    switch_position() {
        if (this.position === 'attacking') {
            this.position = 'defending'
            this.defense_points += this.shield_points
        } else {
            this.position = 'attacking'
            this.defense_points -= this.shield_points
        }
    }
}
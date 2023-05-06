const Character = require('./11-exercise-4-character.js')

module.exports = class Mage extends Character {
    constructor(name, life_points, attack_points, defense_points, magic_points) {
        super(name, life_points, attack_points, defense_points)
        this.magic_points = magic_points
    }

    attack(target_character) {
        target_character.life_points -= (this.attack_points + this.magic_points) - target_character.defense_points
    }

    increase_life(target_character) {
        target_character.life_points += 2 * this.magic_points
    }
}
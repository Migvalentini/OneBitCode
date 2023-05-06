const Character = require('./11-exercise-4-character.js')

module.exports = class Thief extends Character {
    attack(target_character) {
        target_character.life_points -= 2 * (this.attack_points - this.defense_points)
    }
}
module.exports = class Character {
    constructor(name, life_points, attack_points, defense_points) {
        this.name = name
        this.life_points = life_points
        this.attack_points = attack_points
        this.defense_points = defense_points
    }
    attack(target_character) {
        target_character.life_points -= this.attack_points - this.defense_points
    }
}
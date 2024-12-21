function createWarrior(name, health, weapon = { name: "None", damage: 0 }) {
    return {
        name: name,
        health: health,
        weapon: weapon,

        attack(target) {
            const damage = this.weapon.damage;
            console.log(`${this.name} attacks ${target.name} with ${this.weapon.name} dealing ${damage} damage.`);
            takeDamage(target, this.weapon);
        },

        assignWeapon(newWeapon) {
            this.weapon = newWeapon;
            console.log(`${this.name} now wields ${newWeapon.name}!`);
        },
        changeWeapon(newWeapon) {
            let old = this.weapon;
            this.weapon = newWeapon;
            console.log(`${this.name} has changed their weapon from ${old} to ${newWeapon}.`)
        }
    };
}

// function Warrior(name, health, weapon = { name: "None", damage: 0, durability: Infinity }) {
//     this.name = name;
//     this.health = health;
//     this.weapon = weapon;

//     this.attack = function (target) {
//         const damage = this.weapon.damage;
//         console.log(`${this.name} attacks ${target.name} with ${this.weapon.name} dealing ${damage} damage.`);
//         takeDamage(target, this.weapon);
//     };

//     this.assignWeapon = function (newWeapon) {
//         this.weapon = newWeapon;
//         console.log(`${this.name} now wields ${newWeapon.name}!`);
//     };

//     this.changeWeapon = function (newWeapon){
//         let old = this.weapon;
//         this.weapon = newWeapon;
//         console.log(`${this.name} has changed their weapon from ${old} to ${newWeapon}.`)
//     }
// };
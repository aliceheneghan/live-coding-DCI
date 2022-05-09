const character1 = {
  name: "Ken",
  health: 100,
  attackSkill: "punch",
  attackDamage: 20,
};

const character2 = {
  name: "Ryu",
  health: 80,
  attackSkill: "flying kick",
  attackDamage: 30,
};

/**
 * 
 * Inside the attack() function, 
 * 
 * - `this` refers to the characters which is attacking
 * - `opponent` refers to the characters getting attacked 
 */
function attack(opponent) {
  opponent.health -= this.attackDamage; // opponent.health = opponent.health - this.attackDamage
  console.log(
    `${this.name} attacked ${opponent.name}, inflicting ${this.attackDamage} damage. ${opponent.name}'s health is now ${opponent.health}`
  );
}

character1.attack = attack;
character2.attack = attack;

character1.attack(character2);
character2.attack(character1);

// let a = 8;

// // a = a - 2; // 6
// a -= 2; // 6

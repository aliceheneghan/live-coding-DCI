/**
 * We have an online game
 *
 * In the game there are different types of users:
 *
 * - User:
 *  - represents non registered users
 *  - they can play the game for free
 *  - they have a username, but it's randomly generated
 *
 * - Registered user:
 *   - everything that a regular User has
 *   - they can choose and customise their username
 *
 * - Pro user:
 *   - everything a registered User has
 *   - they can customise their outfit in the game
 *   - they are paying a fee
 *
 * - Premium user:
 *   - everything a Pro user has
 *   - they can buy special skills to use in the game
 */

class User  {
  constructor() {
    const randomId = Math.ceil(Math.random() * 999);
    this.username = `Guest_${randomId}`;
  }
  play() {
    console.log(`User ${this.username} is playing the game`);
  }
}

class RegisteredUser extends User {
  constructor(username) {
    super();
    this.username = username;
  }
}

class ProUser extends RegisteredUser {
  constructor(username, customOutfit) {
    super(username);
    this.customOutfit = customOutfit;
  }

}

class PremiumUser extends ProUser {
  constructor(username, customOutfit) {
    super(username, customOutfit);
    this.specialSkills = [];
  }
  buySpecialSkill(skill) {
    this.specialSkills.push(skill);
  }
}

const regularUser1 = new User();
const regularUser2 = new User();
const regularUser3 = new User();
console.log(regularUser1);
console.log(regularUser2);
console.log(regularUser3);

regularUser1.play();

const registeredUser1 = new RegisteredUser("Sandy");

console.log(registeredUser1);
registeredUser1.play();

const proUser1 = new ProUser("Max", "Golden Armor");

console.log(proUser1);
proUser1.play();

const specialSkill1 = {
  name: "Fireball",
  damage: 10,
  cost: 19,
};
const premiumUser1 = new PremiumUser("Sylvia", "Green Robe");
premiumUser1.buySpecialSkill(specialSkill1);
console.log(premiumUser1);
premiumUser1.play();

// instanceof


console.log(typeof proUser1);
console.log(typeof [1, 2, 3]);
console.log("is proUser1 an instance of ProUser?", proUser1 instanceof ProUser);
console.log("is [1, 2, 3] an instance of Array?", [1, 2, 3] instanceof Array);

console.log(Object.getPrototypeOf(proUser1));
console.log(Object.getPrototypeOf(registeredUser1));
console.log(Object.getPrototypeOf(regularUser1));
console.log(Object.getPrototypeOf([1, 2, 3]));
console.log(Object.getPrototypeOf(Object));
console.log(Object.getPrototypeOf(Math));

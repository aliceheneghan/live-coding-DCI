/**
 * DRY - Don't Repeat Yourself
 * 
 */

class Animal {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
  eat(food) {
    console.log(`The ${this.type} ${this.name} is eating some ${food}`);
  }
  sleep() {
    console.log("Zzz");
  }
  walk() {
    console.log(`The ${this.type} ${this.name} is walking`);
  }
}

class Fish {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
  eat(food) {
    console.log(`Eating some ${food}`);
  }
  sleep() {
    console.log("Zzz");
  }
  swim() {
    console.log(`The ${this.type} ${this.name} is swimming`);
  }
}

class Bird {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
  eat(food) {
    console.log(`The ${this.type} ${this.name} is eating some ${food}`);
  }
  sleep() {
    console.log("Zzz");
  }
  fly() {
    console.log(`The ${this.type} ${this.name} is flying`);
  }
}
const animal1 = new Animal("cat", "Julius", "orange");
const animal2 = new Animal("dog", "Bob", "white");
const animal3 = new Animal("giraffe", "Martha", "orange");
const animal4 = new Fish("fish", "Nemo", "orange");
const animal5 = new Bird("bird", "Tweet", "orange");

animal1.walk();
animal4.swim();
animal5.fly();
animal5.eat("worms");
animal1.eat("fish");

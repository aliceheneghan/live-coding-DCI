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
}

class Fish extends Animal {
  constructor(type, name, color, fins) {
    //   this.type = type;
    //   this.name = name;
    //   this.color = color;
    // you can mentally replace super() with the constructor of the parent class (Animal)
    super(type, name, color);
    this.fins = fins;
  }
  swim() {
    console.log(`The ${this.type} ${this.name} is swimming`);
  }
}

class Bird extends Animal {
  constructor(type, name, color) {
    super(type, name, color);
  }
  fly() {
    console.log(`The ${this.type} ${this.name} is flying`);
  }
}
const fish1 = new Fish("fish", "Nemo", "red", 4);
const bird1 = new Bird("bird", "Tweet", "blue");

console.log(fish1);
console.log(bird1);
fish1.eat("fish food");
fish1.swim();

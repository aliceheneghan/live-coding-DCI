/**
 * Class
 *
 * A class in JavaScript is a way of creating a template for constructing objects.
 *
 * With a class we can describe how an object will look like, what properties and what
 * methods it will have.
 *
 * A class is just something abstract, it's not the actual object.
 *
 * When we use a class to create an object, we refer to the object as an "instance"
 * of that class
 *
 */

class Animal {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
  eat(food) {
    console.log(`Eating some ${food}`);
    // returning the instance of the animal to allow method chaining
    return this;
    // return `Eating some ${food}`;
  }
  sleep() {
    console.log("Zzz");
    // returning the instance of the animal to allow method chaining
    return this;
  }
}

// to create an instance of an Animal, I have to use the `new` keyword
const animal1 = new Animal("cat", "Julius", "orange");
console.log(animal1);
animal1.sleep().eat("fish");

const animal2 = new Animal("dog", "Bob", "white");
const animal3 = new Animal("giraffe", "", "orange");
const animal4 = new Animal("fish", "", "orange");
const animal5 = new Animal("bird", "", "orange");

class AnimalsGroup {
    constructor(type) {
        this.type = type;
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
}

const pets = new AnimalsGroup("pet");
const wildAnimals = new AnimalsGroup("wild animals");

pets.addAnimal(animal1);
pets.addAnimal(animal2);
pets.addAnimal(animal4);
pets.addAnimal(animal5);

wildAnimals.addAnimal(animal3);


console.log(pets);
console.log(wildAnimals);
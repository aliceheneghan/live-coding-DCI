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

const animal1 = new Animal("fish", "Nemo", "red");
/**
 * We want to print all the methods available to animal1
 * 
 * If we simply console.log the instance (animal1), we just see the instance properties:
 * - type
 * - name
 * - color
 * 
 */

console.log(animal1);

/** 
 * 
 * We actually would like to see the methods eat() and sleep(),
 * but they are stored in the prototype
 * 
 * We need to get access to the prototype of animal1
 * 
 * To do that, we can use the method Object.getPrototypeOf()
*/

const animalPrototype = Object.getPrototypeOf(animal1);

/**
 * After we saved the prototype in a variable, we can use it in combination with
 * another method called Object.getOwnPropertyNames()
 */

console.log(Object.getOwnPropertyNames(animalPrototype));


/**
 * Another way, is to skip the first step and access the prototype directly
 * by typing the name of the class followed by the prototype, like this:
 * 
 * Animal.prototype
 */

console.log(Object.getOwnPropertyNames(Animal.prototype));

/**
 * Let's try doing that with a class from JavaScript
 * 
 */
console.log(Object.getOwnPropertyNames(Array.prototype));
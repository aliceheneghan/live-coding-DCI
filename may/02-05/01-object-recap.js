

const animal1 = {
  type: "cat",
  name: "maya",
  age: 3,
  color: "orange",
  toys: ["rubber ball", "rope"],
//   listToys: function () {
//     console.log("\nMaya's toys are:\n");
//     for (let toy of animal1.toys) {
//       console.log(toy);
//     }
//   },
  talk() {
    console.log("meow");
  },
  // option 1 of adding a property with a method
  //   listToys: listToys
};

const animal2 = {
  type: "dog",
  name: "rufus",
  age: 5,
  color: "white",
  toys: ["rubber bone", "red ball"],
//   listToys: function () {
//     console.log("\nRufus' toys are:\n");
//     for (let toy of animal2.toys) {
//       console.log(toy);
//     }
//   },
  talk() {
    console.log("woof");
  },
};

function listToys() {
  console.log(`\n${this.name}'s toys are:\n`);
  for (let toy of this.toys) {
    console.log(toy);
  }
}

// let's connect the function listToys to the 2 objects
// after this, the property listToys will be a method for the 2 objects
// option 2
animal1.listToys = listToys;
animal2.listToys = listToys;

console.log(animal1);
/*
The value of `this` is determined by what's on the left of the dot when we call the method
*/
animal1.listToys();
animal2.listToys();

// listToys(animal1);
// listToys(animal2);
// console.log(animal1);
// console.log("Name of the cat is:", animal1.name);
// console.log("Name of the cat is:", animal1["name"]);

// const propertyName = "age";

// console.log(
//   `The ${propertyName} of the ${animal1.type} called ${animal1.name} is ${animal1[propertyName]}`
// );
// console.log(
//   `The ${propertyName} of the ${animal2.type} called ${animal2.name} is ${animal2[propertyName]}`
// );

// console.log(`The first toy of ${animal1.name} is a ${animal1.toys[0]}`);
// console.log(`The first toy of ${animal2.name} is a ${animal2.toys[0]}`);

// // list all maya's toys
// console.log("\nMaya's toys are:\n");
// for (let toy of animal1.toys) {
//   console.log(toy);
// }

// console.log("\nRufus' toys are:\n");
// for (let toy of animal2.toys) {
//   console.log(toy);
// }

// animal1.listToys();
// animal2.listToys();

// const box = {
//   height: 4,
//   length: 5,
//   width: 5,
//   color: "brown",
// };

// // box["age"];

// // box[propertyName] = 18;
// // box["age"] = 18;
// // console.log(box);
// // console.log(`The ${propertyName} of the box is ${box[propertyName]}`);

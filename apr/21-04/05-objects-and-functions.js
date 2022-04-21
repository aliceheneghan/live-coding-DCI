const person1 = {
  firstName: "Lidya",
  height: 1.87,
  age: 26,
};

const person2 = {
  firstName: "Mark",
  height: 1.6,
  age: 35,
};
const person3 = {
  firstName: "Ruth",
  height: 1.9,
  age: 30,
};

const person4 = {
  firstName: "Jessie",
  height: 1.5,
  age: 10,
};

/**
 * create a function called tallerPerson that takes 2 objects in input and
 * returns the object with the larger height
 */
function tallerPerson(obj1, obj2) {
  if (obj1.height > obj2.height) {
    return obj1;
  } else {
    return obj2;
  }
}

const tallPerson = tallerPerson(person1, person2);
console.log("The tallest person is", tallPerson);
console.log("The tallest person is", tallPerson.firstName);

const tallPerson2 = tallerPerson(person3, person4);
const tallPerson3 = tallerPerson(person2, person4);

// deal with missing key or value



// a function that checks who's older and returns the name of that person
function olderPerson(obj1, obj2) {
  if (obj1.age > obj2.age) {
    return obj1.firstName;
  } else {
    return obj2.firstName;
  }
}

console.log(olderPerson(person1, person2))
console.log(olderPerson(person3, person4))
console.log(olderPerson(person2, person4))
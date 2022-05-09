const people = [];
const firstNames = ["Mark", "Sandra", "Dina"];
const lastNames = ["Emin", "Mellow", "Red"];
const ages = [17, 27, 31];
const cities = ["New York", "Berlin", "Barcelona"];

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   console.log(ages[i]);
// }

for (let i = 0; i < firstNames.length; i++) {
  //   const person = {};
  //   person.firstName = firstNames[i];
  //   person.lastName = lastNames[i];
  //   person.age = ages[i];
  //   person.city = cities[i];
  //   person.fullName = `${firstNames[i]} ${lastNames[i]}`;
  //   person.introduce = function () {
  //     return `Hello, my name is ${this.fullName}, I live in ${this.city} and I am ${this.age} years old`;
  //   };
  const person = {
    firstName: firstNames[i],
    lastName: lastNames[i],
    age: ages[i],
    city: cities[i],
    fullName: `${firstNames[i]} ${lastNames[i]}`,
    introduce: function () {
      return `Hello, my name is ${this.fullName}, I live in ${this.city} and I am ${this.age} years old`;
    },
  };

    // we want to add a boolean property called canGetDriverLicense
    // the property is true if the age is greater than or equal to 18
    if (ages[i] >= 18) {
        person.canGetDriverLicense = true;
    } else {
        person.canGetDriverLicense = false;
    }
  people.push(person);
}

console.log(people[0].introduce());
console.log(people[1].introduce());
console.log(people[2].introduce());

// for (let i = 0; i < ages.length; i++) {
//   console.log(i);
//   console.log(firstNames[i]);
// }

const person = {
  firstName: "Tim",
  age: 28,
};

console.log("before delete", person);
// let's delete the property age from the person object
delete person.age;
console.log("after delete", person);

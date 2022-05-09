let people = [
  {
    firstName: "Tim",
    lastName: "Scott",
  },
  {
    firstName: "Sophia",
    lastName: "Locke",
  },
  {
    firstName: "Julie",
    lastName: "White",
  },
];

/*
Create a function that goes through an array of people and adds a new property with the initials
of each person:

  {
    firstName: "Julie",
    lastName: "White",
  }

  Expected output:
  {
    firstName: "Julie",
    lastName: "White",
    initials: "JW"
  }

  The function shouldn't modify the original array
*/

function addInitials(array) {
    const arrayCopy = [];
    for (let item of array) {
        const itemCopy = {...item};
        itemCopy.initials = itemCopy.firstName[0] + itemCopy.lastName[0];
        arrayCopy.push(itemCopy);
    }
    return arrayCopy;
}

let modifiedPeople = addInitials(people);

console.log("modifiedPeople", modifiedPeople);
console.log("people", people);
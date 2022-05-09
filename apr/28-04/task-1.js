const people = [];
const firstNames = ["Mark", "Sandra", "Dina"];
const lastNames = ["Emin", "Mellow", "Red"];
const ages = [18, 27, 31];
const cities = ["New York", "Berlin", "Barcelona"];


for (let i = 0; i < firstNames.length; i++) {
    // let person = {};
    // console.log(firstNames[i], lastNames[i], ages[i], cities[i])
    // person.firstName = firstNames[i];
    // person.lastName = lastNames[i];
    let person = {
        firstName: firstNames[i],
        lastName: lastNames[i],
    }
    people.push(person);
}

console.log(people);









// for (let i = 0; i < firstNames.length; i++) {
//     // let person = {};
//     // person.firstName = firstNames[i];
//     // person.lastName = lastNames[i];
//     let person = {
//         firstName: firstNames[i],
//         lastName: lastNames[i],
//     }
// //   console.log(firstNames[i], lastNames[i], ages[i], cities[i]);
//     people.push(person);
// }

// console.log(people);

const personObject = {
    firstName: "Jessie",
    age: 28,
    nationality: "American",
    occupation: "designer",
    hairColor: "brown",
    isMarried: false,
    birthday: "21/04/1990",
    hobbies: ["skating", "reading", "singing"],
    address: {
      street: "Some street",
      number: 21,
      city: "New York",
    },
    introduce: function () {
      return `hello, my name is ${personObject.firstName} and I am ${personObject.age} year old`;
    },
  };


  // 1 year has passed, let's update person's age
  personObject.age = 29;

  console.log(personObject);

  // whatever the age is, increase it by 1
  personObject.age += 1; // personObject.age = personObject.age + 1
  console.log(personObject);

  // whatever the age is, increase it by 1
  personObject.age++; 
  console.log(personObject);


  // add a new hobby to person's hobbies
  personObject.hobbies.push("cooking");

  console.log(personObject);


  // let's add the last name property to the object
  personObject.lastName = "Smith";
  console.log(personObject);

  personObject.firstName = personObject.firstName.toUpperCase();
  console.log(personObject);

  // let's add the zipcode to the person address
  personObject.address.zipCode = "12345";
  console.log(personObject);
/**
 * 
 */



hello("carlo"); // let name = "carlo"
console.log(hello());
// console.log(name);

let somePeopleNames = ["jim", "jenna", "jacob", "julia"];

function hello(name) { // let name = undefined
    const message = `hello ${name}`;
    return message;
}

let messages = [];

for (let i = 0; i < somePeopleNames.length; i++) {
    messages.push(hello(somePeopleNames[i]));
}

console.log(messages);

// hello("jim")
// hello("jenna")
// hello("jacob")
// hello("julia")


// parameters are variables

// arguments are values
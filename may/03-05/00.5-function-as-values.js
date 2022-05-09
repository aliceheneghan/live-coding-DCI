function add(a, b) {
    let result = a + b;
    return result;
}

let f = add;

console.log("add", add);
console.log("f", f);
console.log("f(2, 3)", f(2, 3));

function printParameterValue(x) { // x = add
    console.log("The parameter value is:", x);
}

let y = 8;
printParameterValue(2);
printParameterValue(2 * 6); // printParameterValue(12)
printParameterValue(y);
printParameterValue(2 < 8);
printParameterValue(add(2, 3)); // printParameterValue(5)
printParameterValue(5);
printParameterValue(add);

let result = add(2, 3);
let f2 = add;



function callFunction(fn) {
    fn();
}

function sayHello() {
    console.log("hello");
}

sayHello();
let f3 = sayHello;

f3();

callFunction(sayHello);
/**
 * Function declaration
 * 
 * To declare a function using the function declaration syntax we rely on the
 * "function" keyword and specify the name for our function
 * 
 * function declarations are hoisted: it means that we can call the function
 * in a point in the code before the actual declaration
 */

// this works because function declarations are hoisted
let result1 = sum(2, 3); 

function sum(a, b) {
    return a + b;
}

let result2 = sum(4, 5);

/**
 * function expression
 * 
 */


// this doesn't work because function expressions are not hoisted
// multiply(4, 5);

let multiply = function(a, b) {
    return a * b;
}

let multiplyResult = multiply(2, 3);



/**
 * Arrow function expression
 * 
 */

const multiplyArrow = (a, b) => {
    return a * b;
}

/**
 * If the body of the arrow function contains only a return statement,
 * we can remove the curly brackets and we can also remove the "return" keyword
 * 
 * When we do this, the return is implicit: the function will automatically return
 * whatever appears after the arrow
 */

const multiplyArrow2 = (a, b) => a * b;

console.log(multiplyArrow2(2, 3));

/**
 * If an arrow function has only one parameter, we can also remove the parenthesis
 * around it
 */

function double3(number) {
    return number * 2;
}

const double = (number) => number * 2;

const double2 = number => number * 2;

console.log(double(4));
console.log(double2(4));

const isItLaterThan8 = hour => hour >= 8 ? "it's later than 8" : "it's NOT later than 8";

// mainFunction();

// function mainFunction() {
//     const hello = (name) => `hello ${name}`;

//     return hello("carlo");
// }






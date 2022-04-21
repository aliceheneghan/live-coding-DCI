/**
 * Pure function
 * 
 * A pure function is a function that when called with the same arguments,
 * gives the same result
 * 
 */

let a = 100;
let b = 900;
// a and b are the parameters of the function
function sum(a, b) {
    return a + b;
}

// 2 and 3 are the arguments
console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));

let c = 100;

function sum2(a, b) {
    return a + b + c;
} 


console.log(sum2(2, 3)); // 15
console.log(sum2(2, 3)); // 15
console.log(sum2(2, 3)); // 15
console.log(sum2(2, 3)); // 15



/**
 * A function with side effects 
 * 
 * A function with side effects it's a function that has an effect on something
 * that it's outside of its scope
 */

let result = 0;
console.log("result before the function call", result);


function multiplyWithSideEffects(a, b) {
    result = a * b;
    return result;
}


multiplyWithSideEffects(2, 3);


console.log("result after the function call", result);

let result1 = 0;
console.log("result1 before the function call", result1);
function multiplyPure(a, b) {
    let result1 = 0;
    result1 = a * b;
    return result1;
}

multiplyPure(2, 3);
console.log("result1 after the function call", result1);
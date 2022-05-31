// x exists in the global scope
let x = 5;



function test() {
    // y exists only within the function test, we cannot access it from outside
    let y = 2;
}




// what things create a scope?
// object
// class
// if...else statements, switch statement
// loops (for, for...of, for...in, while)

{
    let scopedVariable = 99;
}

console.log(scopedVariable);

let string = `${y}`;
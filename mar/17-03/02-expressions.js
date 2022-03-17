/**
 * An expression is any valid unit of code that resolves to a value
 * 
 */

2 + 3

// literal expression
// the "hello" expression literally represents the value "hello"
"hello"

// these are all literal expressions, or literals
2
1
100
true
false
undefined
null

/**
 * A variable can only point to a value, or to a "literal expression"
 * 
 * The variable x can't point to 2 + 3
 * 
 * JavaScript first needs to get the result of the 2 + 3 expression and then
 * the result will be assigned to x
 */
let x = 2 + 3;

console.log(x);





let a = 2;
let b = 3;

let result = a + b;


/**
 * In an assignment operation:
 * 
 * - on the left side of the equal sign we can only have variable names
 * - on the right side of the equal sign we can only have a value or an expression
 * 
 */

// let m = 2;
// let n = +; // <- this is not possible because + is not a value, it's an operator 
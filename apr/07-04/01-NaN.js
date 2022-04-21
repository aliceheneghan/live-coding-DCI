/**
 * NaN - Not-A-Number
 * 
 * There are five different types of operations that return NaN:
 *
 * 1. Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
 * 2. Math operation where the result is not a real number (e.g. Math.sqrt(-1))
 * 3. Operand of an argument is NaN (e.g. 7 ** NaN)
 * 4. Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
 * 5. Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)
 * 
*/

// NaN - Not-A-Number

2 + "bla"; // "2bla"
console.log(2 + "bla")

/**
 * parseInt()
 * 
 * parseInt() tries to extract numbers from a string
 * 
 */
parseInt("100px"); // 100
console.log("100blabla:", parseInt("100blablba")); // 100
console.log("bla100:", parseInt("bla100")); // NaN 
console.log(undefined, parseInt(undefined)); // NaN 


console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN

console.log("NaN + 2:", NaN + 2); // NaN
console.log("undefined + undefined:", undefined + undefined); // NaN
console.log("Infinity * 0:", Infinity * 0); // NaN
console.log("bla * 2:", "bla" * 2); // NaN
console.log("bla - 2:", "bla" - 2); // NaN

console.log(typeof NaN); // "number"

console.log("NaN === NaN", NaN === NaN); // false

// isNaN()
// this function asks the question: is the argument in parenthesis the "symbol" NaN?
// the function isNaN() first tries to convert the value in parenthesis to a number.
// if the value can be successfully converted, the result if false
// otherwise it's true
console.log("isNaN(NaN)", isNaN(NaN)); // true
console.log("isNaN(10)", isNaN(10)); // false
console.log("isNaN(Math.sqrt(-1))", isNaN(Math.sqrt(-1))); // true 
console.log('isNaN("hello")', isNaN("hello")); // true 
console.log('isNaN("123hello")', isNaN("123hello")); // true
console.log('isNaN(parseInt("123hello"))', isNaN(parseInt("123hello"))); // false

// this is kind of an exception because "123" is a string, but isNaN() is able to 
// convert it easily into a number
console.log('isNaN("123")', isNaN("123")); // false

// Number.isNaN()
// Number.isNaN() returns true if the value in parenthesis is NaN and its type 
// was originally also a number
console.log('Number.isNaN(NaN)', Number.isNaN(NaN)); // true
console.log('Number.isNaN("hello")', Number.isNaN("hello")); // false 
console.log('Number.isNaN(213)', Number.isNaN(213)); // false 
console.log('Number.isNaN("213")', Number.isNaN("213")); // false 





let someValue = "hello";


console.log(isNaN(someValue)); // true
console.log(Number.isNaN(someValue)); // false



// you have an input field on a website where a user needs to type a numberical pin
// a pin should be a code of 4 digits, no letters or other symbols are accepted

let input = "12e4";
let containsE = input.includes("e");

let inputNumber = Number(input);
console.log(inputNumber);

console.log("Is the input a valid number?", ! Number.isNaN(inputNumber) && ! containsE);
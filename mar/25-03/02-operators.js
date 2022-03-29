// Ternary operator => operand ? operand : operand

let age = 255

const johnIsAdult = age > 18 ? true : false

console.log('john is adult', johnIsAdult)

// Expression
// expression is code that is being executed at the spot and result in a value

const sum = 5 + 6 + 6; // 5 + 6 + 6 is an expression
console.log('sum is', sum)

// example
let firstName = 'alkis' // statement
let firstNameExpression = 'a' + 'l' + 'k'
let smoker = johnIsAdult && sum > 300; // false

'akis' == 'akis' // true
'akis' === 'akis' // true

let count = 0;

count = count + 1; // 1

// ! -> not operator

// check if array is empty
const array = [];

// length of empty array is 0. 
// truthy values: numbers > 0, boolean true, any string not empty
// falsy values: the 0 number, undefined, null
const isEmpty = !array.length ? 'is not empty' : 'is empty'
console.log('array', isEmpty)

// Undefined and null

// Null is intentially empty value
let testVariable = undefined;
console.log('testVariable is', testVariable)

let undefinedVariable; // is undefined
let nullVariable = null; // is null

let emptyString = '';
console.log('emptystring is of type', typeof emptyString)

const isEmptyString = emptyString.length > 0 ? 'not empty' : ' is empty'
const isEmptyString2 = emptyString ? 'not empty' : ' is empty'
console.log('isEmptyString2 is', isEmptyString2);

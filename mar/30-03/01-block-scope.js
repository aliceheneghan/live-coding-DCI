/**
 * Scope
 *
 * The scope of a variable is the context in which the variable exists and
 * the points in the code where we can use that variable
 */

let x = 5;
// the scope of the variable x starts at line 8 until the end of the file

console.log(x);

/**
 * Block scope
 *
 * The curly brackets of if...else statements (but also in other situations where we have curly brackets)
 * create what is called a "block scope"
 *
 * The block scope is like the scope, but it's limited by the curly brackets
 *
 * If we declare a variable inside of a "block scope", the variable will stop
 * existing at the closing curly bracket }
 */

let hour = 5; // hour lives in the global scope
if (hour >= 8) {
  let message = "wake up"; // message lives in this block scope
} else {
  let message = "go back to sleep"; // message lives in this block scope
}

//console.log(message);

// solution 1

if (hour >= 8) {
  let message = "wake up"; // message lives in this block scope
  console.log(`it's ${hour}, ${message}`);
} else {
  let message = "go back to sleep"; // message lives in this block scope
  console.log(`it's ${hour}, ${message}`);
}

// solution 2

let message = ""; // message lives in the global scope

if (hour >= 8) {
  message = "wake up"; 
} else {
  message = "go back to sleep";
}

console.log(`it's ${hour}, ${message}`);
/**
 * Global and local scope
 *
 * Variables declared outside of a block are called "global", and they live in
 * the global scope
 *
 * Variables declared inside of a block are called "local", and they live only
 * inside that block
 * 
 * The global scope is accessible from everywhere, even from a local scope.
 * The local scope is accessible only from the local scope itself.
 */

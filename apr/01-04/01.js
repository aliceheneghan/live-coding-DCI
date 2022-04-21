/**
 * For loops:
 * syntax:
 * 
 * for (;;) statement;
 * 
 * for (assign a value/expression; expression; epxression) statement; or a block of statements
 * 
 * for (1; 2; 4) {
 *  3
 * }
 * 
 * at the beginning is 1-2-3-4
 * 2-3-4 until 2 is false
 */

for (let i = 0; i < 10 ; ++i) {

    console.log('hello from strange for', i);
}

let test = 0;

console.log('++test is ', ++ test)
let test2 = 0
console.log('test2++ is ', test2++)
console.log('NOW test2 is ', test2)

// for (let i = 0; i <= 10; i++) {

//     console.log('hello! i is', i)
// }

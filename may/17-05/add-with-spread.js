/**
 * spread
 */

// write a function that can accept any number of arguments and adds them together
// - if we don't pass any argument, the result will be 0
// - if we pass a single argument, the result will be the argument itself

function add(...numbers) {
    console.log(numbers);
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

const list = [1, 2, 3]
console.log(add(...list)); // [1, 2, 3] => 1, 2, 3
console.log(add(1, 2, 3, 4, 5, 6));
console.log(add(1, 2, 3));
console.log(add(8, 2));
console.log(add(8));
console.log(add());

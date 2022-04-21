const numbers = [1, 2, 3, 4, 5];

console.log("second item in the array:", numbers[1]);
console.log("last item in the array:", numbers[numbers.length - 1]);


// add elements to the end of an array
numbers.push(6);
numbers.push(7);
numbers.push(8, 9, 10);

console.log(numbers);

// remove elements from the end
numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);

// unshift(): adds at the beginning
// shift(): removes from the beginning


numbers.includes(3); // true
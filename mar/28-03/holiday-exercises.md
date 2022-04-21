
## Test functions

The tasks here consist in creating small function that most of the time have just the purpose of checking if something is true or false and return the correct boolean value.

An example of these functions is `isEven(n)`: it takes a number input and returns `true` or `false`.

### Task 1 - isInRange

Write a function called `isInRange` that checks if a number of our choice is between a specific range of our choice.

For example: 
- is 3 in the range between 5 and 10? => false
- is 21 in the range between 0 and 50? => true

The function takes 3 numerical values in input:

- `number`: the number we want to check
- `min`: the smallest value of the range
- `max`: the largest value of the range

Examples:
```plaintext
isInRange(2, 0, 5); // true
isInRange(10, 0, 5); // false
isInRange(100, 50, 500); // true
isInRange(-1, -50, 50); // true
isInRange(0, -50, 50); // true
```

### Task 2 - containsVowel

Write a function called `containsVowel` that takes a string in input and checks if it contains at least a vowel (any letter between: a, e, i, o, u). 

- it should return true or false
- it must be case insensitive

Examples:
```plaintext
containsVowel("table"); // true
containsVowel("bcdfg"); // false
containsVowel("a"); // true
containsVowel("aeiou"); // true
containsVowel("AEIOU"); // true
containsVowel(""); // false
containsVowel("Abc"); // true
```

### Task 3 - containsNumber

Write a function called `containsNumber` that takes a string in input and returns true if any of the characters in the string is a valid number.

Examples:
```plaintext
containsNumber("123"); // true
containsNumber("abc"); // false
containsNumber("a2c"); // true
containsNumber("100px"); // true
containsNumber("1"); // true
containsNumber("0"); // true
containsNumber("$23.00"); // true
containsNumber("T-shirts x2"); // true
```

### Task 4 - isFirstLetterUpperCase 

(Careful, this could be quite tricky)

Write a function called `isFirstLetterUpperCase` that takes a string in input and returns `true` if the first letter is upper case, `false` otherwise.

Examples:
```plaintext
isFirstLetterUpperCase("hello"); // false
isFirstLetterUpperCase("Hello"); // true
isFirstLetterUpperCase("Bianca"); // true
isFirstLetterUpperCase("jim"); // false
isFirstLetterUpperCase(""); // false
isFirstLetterUpperCase("A"); // true
```

## Filter functions

The tasks here consist in creating functions that mostly work on arrays (sometimes on strings) and they return a new array with only the items that respect a certain conditions. The new array will normally have less items than the original array (even 0 items), sometimes the same number of items.

### Task 5 - cheaperThan

Write a function called `cheaperThan` that takes in input  an array containing a list of prices and a number. It returns a new array with only the prices that are smaller than the number 

Examples:
```plaintext
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20); // [19.99, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90); // [19.99, 29.87, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0); // []
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5); // [2.9]
```

### Task 6 - wordsThatEndWithIng

Write a function called `wordsThatEndWithIng` that takes an array of strings in input and returns a new array containing only words that end with `ing`.

The function should be case insensitive.

Examples:
```plaintext
wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"]
```

### Task 7 - numbersDivisibleBy3

Write a function called `numbersDivisibleBy3` that takes an array of number in input and returns a new array containing only the numbers from the original array that are divisible by 3.

Examples:
```plaintext
numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]
numbersDivisibleBy3([2, 4, 8]); // []
numbersDivisibleBy3([9]); // [9]
```

### Task 8 - onlyLongWords

Create a function `onlyLongWords` that takes a string in input and returns new string containing only the words that are 5 or more characters long.

Examples:

```plaintext
onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
onlyLongWords("The cat is on the table"); // "table"
onlyLongWords("not many long ones here"); // ""
```


## Map functions

The tasks here consist on creating functions that take an array in input and return a new array with the same number of elements as the array in input, but the elements inside are somehow transformed.

For example, we could have an array of words in input: `["table", "chair", "lamp", "pen"]`

And in output an array of the same length with the capitalized words: `["Table", "Chair", "Lamp", "Pen"]`

### Task 9 - addLeadingZero

Write a function called `addLeadingZero` that takes an array of numbers in input and returns a new array containing the same numbers where if the number is only 1 digit long, a zero is added at the beginning. Also, the numbers in the final array should be strings.

Examples:
```plaintext
addLeadingZero([0, 1, 2, 3, 10, 11, 12]); ["00", "01", "02", "03", "10", "11", "12"]
addLeadingZero([1, 100]); ["01", "100"]
addLeadingZero([1, 2, 3]); ["01", "02", "03"]
```

### Task 10 - cutStrings

Write a function called `cutStrings` which takes in input an array with a few sentences and a number. It returns a new array containing the sentences from the input array shortened to the length specified in the number. It also adds thre dots `...` at the end of each cut sentence

Examples:
```plaintext
cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10); ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2); ["He...", "To...", "Ca...", "Th..."]
```
### Task 11 - durationInHours

Write a function called `durationInHours` that takes in input an array with numbers representing the duration of movies in minutes and returns a new array containing the duration expressed in hours. If the result is not an integer number, discard the decimal part.

Examples:
```plaintext
durationInHours([120, 60, 80, 90, 100]); // [2, 1, 1, 1, 1]
durationInHours([50, 20, 180]); // [0, 0, 3]
```
### Task 12 - reverseWords

Write a function called `reverseWords` that takes in input an array of words and returns a new array with all the words reversed

Examples:
```plaintext
reverseWords(["cat", "shoe", "one", "sos", "hello"]); // ["tac", "eohs", "eno", "sos", "olleh"]
```

## Reducer functions

These tasks consist in creating functions that take arrays in input and they return a single value: this value can be a number, a string, but also a completely new array.

Some examples:
- array to number: given an array of numbers in input, we get the numbers added together in return: `[1, 2, 3]` => `6`
- array to number: given an array of numbers in input, we get the maximum value return: `[1, 2, 3]` => `3`
- array to number: given a string in input, we get the count of vowels in it: `JavaScript` => `3` (the trick here is that the string can be easily converted into an array)
- array to string: `["tomato sauce", "mozzarella", "pineapple", "basil", "oil", "dough"]` => `"Pizza: tomato sauce, mozzarella, basil, oil, dough`
- array to string: `["t-shirt", "jeans", "jeans", "hat", "hat", "hat"]` => `"Cart: t-shirt, jeans x2, hat x3`

### Task 13 - countConsonants

Write a function called `countConsonants` that takes a string in input and returns the number of consonants (letters that are not: a, e, i, o, u) in the string. Empty space and other symbols are also not consonants.

Examples:
```plaintext
countConsonants("hello"); // 3
countConsonants("aeiou"); // 0
countConsonants("be right back"); // 8
countConsonants("JavaScript"); // 7
```

### Task 14 - sumEvenNumbers

Write a function called `sumEvenNumbers` that takes an array in input and returns the sum of all the even numbers in the array.

Examples:
```plaintext
sumEvenNumbers([1, 2, 3, 4, 5, 6]); 12
sumEvenNumbers([100]); 100
sumEvenNumbers([100, 1, 3]); 100
sumEvenNumbers([-2, 4, 3]); 2 
```

### Task 15 - countByColor

Write a function called `countByColor` that takes in input an array with objects of 3 possible colors: red, yellow, green.

It returns a new array where:
- at index 0, there is the number of red objects in the array
- at index 1, there is the number of yellow objects in the array
- at index 2, there is the number of green objects in the array

Examples:
```plaintext
countByColor(["Red pen", "Yellow shirt"]); // [1, 1, 0]
countByColor(["Red pen", "Yellow shirt", "Green salad"]); // [1, 1, 1]
countByColor(["Pink hair", "Blue sky"]); // [0, 0, 0]
countByColor(["Yellow table", "Yellow piano", "Green guitar]); // [0, 2, 1]
```
### Task 16 - sumEvenOdd

Write a function called `sumEvenOdd` that takes in input an array of numbers and returns a new array where:

- at index 0 there is the sum of all the even numbers in the array
- at index 1 there is the sum of all the odd numbers in the array

Examples:
```plaintext
sumEvenOdd([1, 2, 3, 4, 5, 6]);  // [12, 9]
sumEvenOdd([0, -2, 11]);  // [-2, 11]
sumEvenOdd([1, 3, 15]);  // [0, 19]
```

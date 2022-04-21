# General exercises

## Task 1

Write a function that takes in one parameter and logs that parameter 3 times into the console.

## Task 2 
Write a function called `repeat5` that takes in one parameter and returns a string with that parameter repeated five times. 

For example:

```plaintext
repeat5("Cat") // => "CatCatCatCatCat"
```

## Task 3

Write a function called `repeat` that takes in two parameters. 

- the first one should be a number 
- the 2nd one should be a string 
 
The functions returns the 2nd argument repeated as many times as the 1st argument defines. 

For example:
```plaintext
repeat(3, "Woah"); // => `WoahWoahWoah`
```

## Task 4
Write a function called `max` that takes in an array of numbers as a parameter.

It should return the largest number in the array.

For example:
```plaintext
max([1, 6, 83, 91, 0, -4, 1337, 5]); // => 1337
```

## Task 5 

This question has 2 parts

1) write a function that takes in a number and does a `console.log(inputnumber + " is divisible by 10!")` if the number is evenly divisable by 10. 
 
Examples:

-  printIfDivisibleByTen(1) --> no output
-  printIfDivisibleByTen(2) --> no output
-  printIfDivisibleByTen(32) --> no output
-  printIfDivisibleByTen(10) --> "10 is divisible by 10!" into the console
-  printIfDivisibleByTen(30) --> "30 is divisible by 10!" into the console
-  printIfDivisibleByTen(90000) --> "90000 is divisible by 10!" into the console

2) write a for-loop that runs 125 times, each time calling the function you just created  with the current iteration number.

## Task 6

Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

## Task 7

Write an arrow function that takes in one parameter and returns `true` if that parameter is a string, `false` otherwise

## Task 8 

Write an arrow function that takes in two parameters and returns `true` if both of them are strings.

## Task 9 
Write an arrow function that takes in one string. 

The function should return the first word in the string that was given to it.

Examples:

```plaintext
getFirstWord("Internetting is hard") --> "Internetting"
getFirstWord("Hello World") --> "Hello"
getFirstWord("Hello") --> "Hello"
```

## Task 10 *HARD* 

Write an arrow function that takes in one string.

The function should return a new string where each word in the input string is repeated by the amount of words in the input string. Examples:

```plaintext
wordRepeater("bunny") // --> "bunny"
wordRepeater("Cat food") // --> "Cat Cat food food"
wordRepeater("I am groot") // --> "I I I am am am groot groot groot"
wordRepeater("O M G ?") // --> "O O O O M M M M G G G ? ? ? ?"
```

## Task 11.

Write a short (single line) arrow function that takes in one string and returns the first character of that string. 

Examples:
```plaintext
firstLetter("cat") --> "c"
firstLetter("quylthulg") --> "q"
```

## Task 12.

Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input.

Examples:

```plaintext
firstLetters("cat") --> "c"
firstLetters("What the fruit") --> "Wtf"
firstLetters("MongoDB Express Node React") --> "MERN"
firstLetters("What You See Is What You Get") --> "WYSIWYG"
```

## Task 13
Write an arrow function that takes in one variable.

If the variable is not a string, return null.

If it is a string, return an array where each of the characters of that string as an individual array entry.

Examples:
```plaintext
explode("Cat") --> ["C", "a", "t"]
explode("JavaScript") --> ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
explode(41) --> null
explode("") --> []
explode("R & D") --> ["R", " ", "&", " ", "D"]
```

## Task 15 

Reverse engineering challenge 1. 

Given the input and the corresponding output below, try to write a function that gives you these results

```plaintext
foo("") -> false
foo("a") -> false
foo("o") -> true
foo("Cat") -> false
foo("Tomato") -> true
foo("Potato") -> true
foo("Blanket") -> false
foo("1") -> false
```

## Task 16

Given the inputs and outputs below, try to write a function that gives you these results. 

```plaintext
bar("") --> "Cat"
bar("x") --> "Cat"
bar("Cat") --> "Catt"
bar("Foobar") --> "Catobar"
bar("Potato") --> "Cattato"
bar("Tomato") --> "Catmato"
bar("International Space Station") --> "Catternational Space Station"
```
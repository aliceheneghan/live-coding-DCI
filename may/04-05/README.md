# 04-05

- callbacks review
- advanced array methods:
  - map()
  - filter()
  - find()
  - forEach()

## Advanced array methods

Array methods like `map()`, `filter()` and `find()` all work very similarly: they accept a callback as a parameter and automatically apply the callback on each item of the array.

The callback function has 3 possible parameters:

- `item`: the current item of the array
- `index`: the index of the current item of the array
- `array`: the whole array on which we are calling the method

### map()

The array method `map()` is normally used to modify the items from the original array.

As a result we get an array with the same number of items as the original one where every element is modified according to the result of the callback.

The callback we use with `map()` should normally return a new item (it could be a number, a string, an array, an object) that we want to see in the resulting array

### filter()

The array method `filter()` is normally used to remove elements from the original array depending on some kind of condition that we specify inside the callback function.

As a result of `filter` we normally get an array with less items than the original one, sometimes an empty array.

The callback we use with `filter()` should return a boolean: at every iteration, if the return value is `true`, the item in that iteration will be added to the resulting array; if it's `false`, the item will be discarded.

If the callback returns something that it's not a boolean, it will still be treated as a boolean, following the rules of `truthy` and `falsy` values

### find()

The array method `find()` works like `filter()`, but as a result we'll get only one element: the first element in the array that satisfies the condition in the callback


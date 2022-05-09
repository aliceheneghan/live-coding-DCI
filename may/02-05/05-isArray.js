/**
 * typeof is not very useful with arrays, because it will just tell us that it's
 * an object
 *
 * We can use the method Array.isArray() which will return `true` or `false`, depending
 * whether the argument is an array or not
 */

let a = [1, 2, 3];
let b = { bla: "bla", asd: "asd" };
console.log(typeof a);

console.log(Array);
console.log(Array.isArray(a)); // true
console.log(Array.isArray(b)); // false

function myIsArray(item) {
  if (item.length === undefined) {
    console.log("it's an object");
  } else {
    console.log("it's an array");
  }
}

myIsArray(a);
myIsArray(b);


// let Array = {
//     isArray: function() {},
//     ...
// }
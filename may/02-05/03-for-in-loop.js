const animal1 = {
  type: "cat",
  name: "maya",
  age: 3,
  color: "orange",
  toys: ["rubber ball", "rope"],
};

/**
 * the for...in loop lets us iterate over the keys of an object
 *
 * "key" is not a keyword, you can call it however you want
 */
for (let key in animal1) {
  console.log("key", key);
  //   console.log("value", animal1.key);
  console.log("value", animal1[key]);
}

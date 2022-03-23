/**
 * Logical operators
 *
 * They are operators that work with booleans and as a result give you back
 * another boolean
 *
 * && - Logical AND
 * || - Logical OR
 * ! - Logical NOT
 */

/**
 * The logical AND (&&) gives true only when both values are true
 * if even a single value is false, the result will be false
 */
console.log("true && true", true && true); // true
console.log("false && true", false && true); // false
console.log("true && false", true && false); // false
console.log("false && false", false && false); // false

let hour = 9;
let day = "Saturday";

let message =
  hour >= 9 && day !== "Sunday" && day !== "Saturday"
    ? "go to work"
    : "keep sleeping";
console.log(message);

/**
 * The logical OR (||) is true as long as at least 1 value is true
 *
 */

console.log("true || true", true || true); // true
console.log("false || true", false || true); // true
console.log("true || false", true || false); // true
console.log("false || false", false || false); // false

let jeansPrice = 10;
let money = 5000;
let hasPromotionCoupon = false;

let canBuyJeans = money > jeansPrice || hasPromotionCoupon;

/**
 * Logical NOT (!) gives us the opposite of the current value:
 * - if current value is true, we get false as a result
 * - if current value is false, we get true as a result
 *
 */

console.log("! true", !true); // false
console.log("! false", !false); // true

let isLoggedIn = false;
let displayPopupMessage = !isLoggedIn
  ? "log in to continue"
  : "do you also want to sign up to our newsletter?";

console.log(displayPopupMessage);

console.log("!(true && true)", !(true && true)); // false
console.log("(true && true) || (true && false)", (true && true) || (true && false)); // true
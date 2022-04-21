function isInRange1(number, min, max) {
    if (number >= min && number <= max) {
        return true;
    } else {
        return false;
    }
}

function isInRange(number, min, max) {
    return number >= min && number <= max;
}
console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true
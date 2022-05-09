function sum(a, b) {
    return a + b;
}

sum(2, 3); // 5

let result = sum(2, 3); // 5

let fn = sum;
console.log(fn);

console.log("sum(2, 3)", sum(2, 3));
console.log("fn(2, 3)", fn(2, 3));
console.log("fn === sum", fn === sum);
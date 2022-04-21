function getListOfNumbers1(max) {
    const result = [];
    for (let i = 0; i <= max; i++ ) {
        result.push(i);
    }
    return result.join(" ");
}

console.log(getListOfNumbers1(10))

function getListOfNumbers2(max) {
    let result = "";
    for (let i = 0; i <= max; i++ ) {
        result += i + " - ";
    }
    return result;
}
console.log(getListOfNumbers2(10))
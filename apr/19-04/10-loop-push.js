function getListOfNumbers(max) {
    const result = [];
    for (let i = 0; i <= max; i++ ) {
        result.push(i);
    }
    return result;
}

console.log(getListOfNumbers(10))
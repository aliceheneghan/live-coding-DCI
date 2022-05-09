// 3 different ways of declaring a function sum

function sum1(a, b) {
    return a + b;
} 

const sum2 = function(a, b) {
    return a + b;
}

// -> =>
const sum3 = (a, b) => {
    return a + b;
}

const sum4 = (a, b) => a + b;

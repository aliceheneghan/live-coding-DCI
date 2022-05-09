let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];
function multiplyTotal(accumulator, currentValue) {
  if (currentValue === 0) {
    return accumulator * currentValue;
  } else {
    return accumulator;
  }
}
let result = numbers.reduce(multiplyTotal, 1);
console.log(result); // 3628800

function SeriesSum(n)
{
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (i * 3 + 1); 
  }
  
  return sum.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));

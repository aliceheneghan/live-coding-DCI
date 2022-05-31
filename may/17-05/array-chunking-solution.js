function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); //=== [[1, 2, 3], [4, 5, 6], [7]];
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); //=== [[1, 2], [3, 4], [5, 6], [7]];


// function chunkArrayReduce(array, size) {
//     return array.reduce((acc, item, index) => {
//         return 
//     }, [])
// }
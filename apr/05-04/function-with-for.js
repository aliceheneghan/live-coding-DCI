function generateNumbers() {
  for (let i = 0; i < 5; i++) {
    return i;
  }
}

console.log(generateNumbers());

function loop2() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(i);
    }
    return array; 
}

console.log(loop2());


function empty() {}

empty;

















let newString = "";
newString += "b";
newString += "a";
newString += "t";

console.log(newString);
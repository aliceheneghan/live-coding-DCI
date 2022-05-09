function volume() {
  return this.height * this.width * this.length;
}

let box1 = {
  height: 4,
  width: 8,
  length: 7,
  volume: volume,
};

let box2 = {
  height: 2,
  width: 3,
  length: 6,
  volume: volume,
};

// box1.volume = volume;
// box2.volume = volume;

console.log(box1);
console.log(box1.volume());
console.log(box2.volume());

console.log(box1.volume === box2.volume); // true
// Q1. In one night, a movie theater sells tickets for 6450 dollars.
// Each ticket costs 15 dollars.
// How many people purchased a ticket?
const ticketsSold = 6450;
const ticketPrice = 15;
const peopleCount = ticketsSold / ticketPrice;
console.log(`Q1: ${peopleCount} bought tickets`);

//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500;
// to get the number of weeks in a year we can divide the number of days in a year
// by the number of days in a week: 365 / 7 => 52.14
const weeksInAYear = 52;
const yearlySalary = weeklyIncome * weeksInAYear;
console.log(`Q2: Sylvia earns $${yearlySalary} per year`);

// Q3. Calculate the percentage of 18/30. Expected output: number%
const a = 18;
const b = 30;
const percentage = (a / b) * 100;
console.log(`Q3: ${percentage}%`);

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const squareSideLength = 4.75;
const squarePerimeter = squareSideLength * 4;
console.log(`Q4: Perimeter of square = ${squarePerimeter}cm`);

// Q5. Calculate the perimeter of a triangle.
// Assume the length of the sides are 5cm, 6cm, 7cm.
const triangleSideA = 5;
const triangleSideB = 6;
const triangleSideC = 7;
const trianglePerimeter = triangleSideA + triangleSideB + triangleSideC;
console.log(`Q5: Perimeter of triange = ${trianglePerimeter}cm`);

// Q6. Calculate the area of a square. Each side is 5cm.
const square2SideLength = 5;
const square2Area = square2SideLength ** 2;
// const square2Area = square2SideLength * square2SideLength;
console.log(`Q6: Area of square = ${square2Area}cm²`);

// Q7. Calculate the area of a right-angled triangle.
// Assume the length of the sides are 3cm, 4cm, 5cm.
const cathetus1 = 3;
const cathetus2 = 4;
const hypothenuse = 5; // just for completeness, not needed for the formula
const rectangleArea = cathetus1 * cathetus2;
const triangle2Area = rectangleArea / 2;
console.log(`Q7: Area of triangle = ${triangle2Area}cm²`);

// Q8. Calculate the volume of a cube. Length of each side is 9cm.
const cubeSideLength = 9;
// const cubeVolume = cubeSideLength * cubeSideLength * cubeSideLength;
const cubeVolume = cubeSideLength ** 3;
console.log(`Q8: Volume of cube = ${cubeVolume}cm³`);

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip
const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92;
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
  `Q9: Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`
);

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hour?
const totalHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
const totalWorkingDays = 10;
const averageWorkingHours = totalHours / totalWorkingDays;
console.log(`Q10: Noemy's average hours: ${averageWorkingHours}`);

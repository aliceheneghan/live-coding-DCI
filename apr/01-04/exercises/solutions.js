// 01 - Print the larger number
const num1 = 1;
const num2 = 2;

function findDiffer() {

    if (num1 > num2) {
      console.log(
        "The larger of " + num1 + " and " + num2 + " is " + num1 + "."
      );
    } else if (num2 > num1) {
      console.log(
        "The larger of " + num1 + " and " + num2 + " is " + num2 + "."
      );
    } else {
      console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}

findDiffer()

// 02 - Print Even or Odd
function printEvenAndOdd() {
    for (let i = 0; i < 16; i++) {
        if (i === 0) {
            console.log(i, 'is even')
        } else if (i % 2 === 0) {
            console.log(i, 'is even')
            
        } else {
            console.log(i, 'is odd')
        }
    }
}

printEvenAndOdd();

// 03 - Check Grades
const grades = [80,77,88,95,68];

function checkGrades() {

    let sumOfGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        sumOfGrades += grades[i]
    }

    const average = sumOfGrades / grades.length;

    console.log('The class average mark is', average)

    for (let i = 0; i < grades.length; i++) {

        switch (true) {

            case (grades[i] < 60 ): 
                console.log('For student #'+i, 'the grade is F' )
                break;
            case (grades[i] < 70 ): 
                console.log('For student #'+i, 'the grade is D' )
                break;
            case (grades[i] < 80 ): 
                console.log('For student #'+i, 'the grade is C' )
                break;
            case (grades[i] < 90 ): 
                console.log('For student #'+i, 'the grade is B' )
                break;
            case (grades[i] < 100 ): 
                console.log('For student #'+i, 'the grade is A' )
                break;
            default:
                console.log('Unknown grade for student #'+ i)
        }
    }
}

checkGrades()

// 04 - Sum multiples of 3 and 5
function sumUnder1000() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    console.log(sum);
}
sumUnder1000()

// 05 - Check ending of String

const string = "Open sesame"
const end = "same"

function compareEnding() {
    const endLength = end.length

    const part = string.slice(string.length - endLength)

    if (part === end) {
        console.log(`${string} ENDS with ${end}`)
    } else {
        console.log(`${string} DOES NOT with ${end}`)
    }

}

compareEnding()

// 06 - Repeat String

const givenString = "abc";
const numberOfTimes = 3;

function repeatString() {
    
    if (numberOfTimes <= 0) console.log('')

    let result = ''

    for(let i = 1; i <= numberOfTimes; i++) {
        result += string
    }

    console.log(result);
}

// 07 - Find Sum
const givenNumber = 6;

function addTo() {
    let sum = 0;
    for (let i = 0; i <= givenNumber; i++) { // 0 doesn't matter :)
      sum = sum + i;
    }
    console.log(sum);
}

addTo();

// 08 - Create Pattern
function createPattern() {
  
    for (let x = 1; x <= 6; x++) { // 5 rows of stars
    
      let stars = '' // here we will store the stars
  
      for (let y = 1; y < x + 1; y++) { // number of stars for each row
        
        stars += "*";
  
      }
  
      console.log(stars);
    }
  }

  createPattern()

// 09 - Filter array

const array = ['apple','banana','orange'];

function cleanArray() {

    for (let i = 0; i < array.length; i++ ) {
        if (array[i][0] === 'a') array.splice(i, 1)
    }

    console.log(' array is', array)
}

cleanArray()

// I.E. 1
 const grade0 ='E';  
 let result0;  
 switch(grade0) {  
     case 'A':  
         result0 +="10";  
     case 'B':  
         result0 +=" 9";  
     case 'C':  
         result0 +=" 8";  
     default:  
         result0 +=" 0";  
 }  
 console.log(result0); // "undefined 0"


// I.E. 2
// Uncomment to see the answer :)
//  const grade ='A';  
//  const result = 0;  
 
//  switch(grade)
//  {  
//      case 'A':  
//          result += 10 ;  
//      case 'B':  
//          result += 9;  
//      case 'C':  
//          result += 8;  
//      default:  
//          result += 0;  
//  }  
 
//  Answer: gives error. assignment to a constant variable. 27
//  console.log(result)
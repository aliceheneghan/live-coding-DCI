/**
 * 03 Medium - Check Grades
 * Write a function that works with an array of marks of students and computes
 * and prints, the class average mark:
 * David	80
 * Vinoth	77
 * Divya	88
 * Ishitha	95
 * Thomas	68
 * Then, calculate and print the grade for each student
 * Grades should be calculated based on these values:
 * Range	Grade
 * <60	F
 * <70	D
 * <80	C
 * <90	B
 * <100	A
 * Use a switch statement to solve this one
 */

const array = [80, 77, 88, 95, 68]
// We're having 5 values-

// need to calculate what is 80 in the grade system. e.g. it's C

function calcAverage(grades) {

    let sum = 0;

    for (let i = 0; i < grades.length; i ++) {
        sum += grades[i]
    }

    return sum / grades.length
}

function calcGrade(mark) {
    // * <60	F
    // * <70	D
    // * <80	C
    // * <90	B
    // * <100	A

    switch(true) {

        case (mark < 60): 
            return 'F';
        case (mark < 70):
            return 'D';
        case (mark < 80): 
            return 'C';
        case (mark < 90):
            return 'B';
        case (mark <= 100):
        return 'A';
    }
}

console.log('AVG is', calcAverage(array))
for (let i = 0; i < array.length; i++) {

    console.log('for item:', i, 'grade is:', calcGrade(array[i])) // 68 is D
}

// need to caclc the avg. 
// loop over an array and find the sum and divide by the length
let string = "carlo says \"hi\"";
let string2 = 'carlo says "hi"';
let string3 = `these are single quotes '' and these are double quotes""`;
let string4 = `these are single quotes '', these are double quotes "", and these are backticks \`\``;


console.log(string);
console.log(string4);

// to display a backslash in a string we need to escape it, basically we need
// to write to backslash characters one after the other \\

let string5 = `this character is called backslash: \\ aaa`;
console.log(string5);

// special escape sequences 

// let's print a string in 2 lines
let greeting = "hello\nworld";
console.log(greeting);

// \t is the tab (tabulation) character: depending on the system, it's equal to
// 4 spaces or 2 or 8 spaces
let greeting2 = "hello\t\tworld";
console.log(greeting2);

// \b is the backspace, so it erases the previous character
let greeting3 = "hello\b\bworld";
console.log(greeting3);
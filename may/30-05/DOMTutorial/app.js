/* 
! DOM ( DOCUMENT OBJECT MODEL )

! 1- WHAT IS DOM?

We are using JS to read or change the DOM
*/

// !------------------------------------------------

// !  2 - GET ELEMENT BY ID :

let banner =  document.getElementById('movie-list');
console.log(banner);

// !------------------------------------------------

// ! 3- GET ELEMENT BY CLASS :

/* 
ID's are unique:
Each element can have only one ID
Each page can have only one element with that ID


Classes are NOT unique:
You can use the same class on multiple elements
You can use multiple classes on the same element
*/

document.getElementsByClassName('title')

// !------------------------------------------------

// ! 4- GET ELEMENT BY TAG

document.getElementsByTagName('li');

/* 

HTMLCollection(4) [li, li, li, li] =

{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
*/ 


// !------------------------------------------------

// ! 5 - FOR LOOP TO REACH THE CLASSES:


let titles = document.getElementsByClassName('title');

for ( i=0; i<titles.length; i++){
    console.log(titles[i])
}

// Output:
//<h1 class=​"title">​IMDb "Top 250"​</h1>​
//<h2 class=​"title">​According to IMDb:​</h2>​

// !------------------------------------------------

// ! 6- FOR EACH TO REACH THE CLASSES : ( ALTERNATIVELY)

let titles2 = document.getElementsByClassName('title');
// HTMLCollection : like an Array but NOT

titles2.forEach(function(item){
    console.log(item);
})


// to test the variable (titles) is an array or not
// if it is an Array result is True, otherwise False
console.log(Array.isArray(titles2)); // Output: False

//titles2 is not an array. To work with titles2 with forEach, we should convert it into an array

Array.from(titles2).forEach(function(param){
    console.log(param);
})

// !------------------------------------------------

// ! THE QUERY SELECTOR

// Query Selector for ID:
// if it is an ID, you should write '#'

let wrap = document.querySelector('#add-movie');

console.log(wrap);

// Query Selector for Class :

let wrap2 =document.querySelector('.test');

console.log(wrap2);

// Select span (class : name ) => second li => ul => div

document.querySelector('li:nth-child(2) .name')


// if you wanna grab all elements for ".name", there is a problem. It will return just for the first one!
let allinone = document.querySelector('#movie-list li .name')
console.log(allinone)


// if you wanna grab all elements for ".name",

let allinone2 =document.querySelectorAll('#movie-list li .name');


allinone2.forEach(function(p){
    console.log(p)
})

// !------------------------------------------------

// Changing Style :

let changeStyle = document.querySelector('#add-movie');


changeStyle.style.color = 'blue';

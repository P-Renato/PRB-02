/* 
In order to add a bit of interactivity to our code,
we are going to use a library.


*/

import readlineSync from 'readline-sync';


// let userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


// we do not need to import readLineSync every time we need to use it!

let age = readlineSync.question('Ho old are you? ');
console.log('You are ', age);

// How to convert the string to a number
const ageAsNumber = Number(age);
console.log ( typeof ageAsNumber);
/*
Loops
The while statement creates a loop that executes a specified statement 
as long as the test condition evaluates to true. 
The condition is evaluated before executing the statement.
*/

// A promise
let myNum = 1;
myNum++; // Adds 1 to the current value of myNum
console.log( myNum ); // 2
myNum++;
console.log( myNum ); // 3

console.clear();

// While loop demo

let counter = 0;
while (counter < 3) {
    console.log ("Counter", counter);
    counter++;
}
console.log ("Counter after the loop", counter);
 
console.clear();

let count = 2;
while (count >= 0){
    console.log("Counter is ", count);
    count--;
}


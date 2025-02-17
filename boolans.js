/*
In js pretty much each value counts as a boolean (true or false) 
Values that are not actually true, but count as true are called truthy,
Values that are not actually false, but count as false are called falsy.

False values
- undefined
- null
- 0
- NaN
- "0"
- "" (empty string)
- false

*/


// Boolean() evaluates a valueto true or false
console.log( Boolean(1) ); 
console.log( Boolean(500) ); 
console.log( Boolean(500) ); 
console.log( Boolean(-500) ); 
console.log( Boolean("hey") ); 

// some falsy values
console.log( Boolean(0) );
console.log( Boolean("") );
console.log( Boolean(undefined) );
console.log( Boolean(null) );
console.log( Boolean(NaN) );

let myVariable;
console.log( Boolean(myVariable) ); // Undefined

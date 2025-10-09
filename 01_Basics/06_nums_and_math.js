
// Declare a number variable
const score = 400
// Print the value of score
console.log(score);


// Create a Number object
const balance = new Number(100)
// Print the Number object
console.log(balance);


// Convert balance to string and get its length
console.log(balance.toString().length);
// Format balance to 1 decimal place
console.log(balance.toFixed(1));


// Declare a floating point number
const otherNumber = 123.8966
// Format otherNumber to 4 significant digits
console.log(otherNumber.toPrecision(4));


// Declare a large number
const hundreds = 1000000
// Format number using Indian locale (adds commas)
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math object provides mathematical constants and functions
console.log(Math);
// Absolute value
console.log(Math.abs(-4));
// Round to nearest integer
console.log(Math.round(4.6));
// Round up
console.log(Math.ceil(4.2));
// Round down
console.log(Math.floor(4.9));
// Minimum value
console.log(Math.min(4, 3, 6, 8));
// Maximum value
console.log(Math.max(4, 3, 6, 8));

// Generate random number between 0 and 1
console.log(Math.random());
// Generate random number between 1 and 10 (not integer)
console.log((Math.random()*10) + 1);
// Generate random integer between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);

// Generate random integer between min and max (inclusive)
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
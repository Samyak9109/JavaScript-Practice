let score = "33";
let score2 = "33abc"

console.log(typeof score)
console.log(typeof (score2))// type of can be used as a method and directly like above

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // wrappe to convert string to Number 

let valueInNumber2 = Number(score2) // the number converted will be a NaN cause it contains string characters
//Nan = Not a number 
console.log(typeof valueInNumber)
console.log(valueInNumber2) 

//null value will be converted to zero
//undefined value will be converted into NaN
//true is 1 and false is 0
//Type of NaN is Number

let isLoggedIn = "Sam"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//empty list returns false

console.log(booleanIsLoggedIn)

let num  = 32
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)

//number is conveeted into string types
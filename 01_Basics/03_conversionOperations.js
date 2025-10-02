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

//************************  OPERATIONS  ****************************\\
console.log(2+3)
console.log(2-3)
console.log(2*2)
console.log(2**3) //return 2 raised to power 3
console.log(2/3)
console.log(3%2)

let str1 = "Hello"
let str2 = "Samyak"
let str3 = str1 + str2

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2 )
console.log(1 + 2 + "2")
/* type is decided by what comes first , 
like in this case int and the two numbers add  
them the new string is added in this the first string pppears so it is concatenanted"
*/

console.log(true)
console.count(+true)


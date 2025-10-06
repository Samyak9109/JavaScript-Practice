//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// JS is dyanamically typed language
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* 
Stack (Primitive) and Heap (Non- Primitive)
Stack provies copy for variables declared using stack 
Heap provides reference for variable declared using Heap 
*/
let myYoutubeName = "SamyakJaindotcom"
let anotherName = myYoutubeName
anotherName = "chaiAuRCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {//Heap 
    email : "user@mail.com",
    upi : "user@ybl"
}
let userTwo = userOne;

userTwo.email = "userTwo@google.com"

console.log(userOne.email);
console.log(userTwo.email)
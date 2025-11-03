// singleton is an object which can have only one instance
// Objects in JavaScript are used to store keyed collections of various data and more complex entities.
// Objects can be declared as literals and as constructors

//objects as literals are single instances and are useful for storing data as key-value pairs

//declaring an object using symbol as key
const mySym = Symbol("key1")

//declaring an object using object literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//using symbol as key but it will not be shown in console.log cause symbol properties are not enumerable
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Accessing object properties
console.log(JsUser.email) 
console.log(JsUser["email"])//bracket notation is useful when key has space or special character
console.log(JsUser["full name"])//it is given in double quotes because of space
console.log(JsUser[mySym])// accessing symbol key using square bracket notation cause dot notation won't work


//Updating object properties
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//Adding new property to object
JsUser.phoneNumber = "9999999999"
// console.log(JsUser);


//adding function in object
JsUser.greeting = function(){//method inside object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){//string interpolation using backticks
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//Creating object using constructor
const UserTwo = new Object()
UserTwo.name = "Hitesh"
UserTwo.age = 18
UserTwo.location = "Jaipur"

const user = {
    username: "hitesh",
    price: 999,
    //this keyword always point to the current object/context. 
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//points to user object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//in regular function this keyword points to the global object (window in browsers, global in nodejs)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //will output undefined because arrow functions do not have their own 'this' context
// }
 
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => { //arrow function
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return
 
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //returning object literal using arrow function


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
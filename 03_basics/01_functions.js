
function sayMyName(){ // function declaration 
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // referencing / calling / invoking the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2// return keyword - used to return some value from the function
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); 


function loginUserMessage(username = "sam"){ // function with default parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // template string
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1 // num1 is an array of all the values passed after val2
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { // object
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // Funtion accepting object as parameter as a generic name
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // giving generic name to parameter
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
//var c = 300
let a = 300
//outside paranthesis scope is called global scope 
if (true) { // scope is defined by {} 
    //scope inside this paranthesis is called block scope 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){ // scope of function one
    const username = "hitesh"

    function two(){ // scope of function two
        const website = "youtube"
        console.log(username);
    } 
    // console.log(website);

    two() // calling function two inside function one 

}

// one()

//line by line execution is done is JS
//JavaScript is a interpreted language


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // this gives error because function expression is not hoisted
const addTwo = function(num){ // function expression 
    return num + 2
}

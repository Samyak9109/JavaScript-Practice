const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // for each loop it is used to iterate over array
//     console.log(val);
// } )

// coding.forEach( (item) => { // callback function - a function passed as an argument to another function
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {// 3 parameters - item, index, array for each iteration
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { // iterating over array of objects
    console.log(item.languageName);
} )
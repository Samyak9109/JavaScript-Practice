const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Old method for string concatenation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//uses String interColation using backticks
//${} wrtie variable in the curly braces

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//outer boound is exclusive , mean 4 will not be included
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trims leading and trailing white spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
//split method splits strings based on the character given , like in out case the getname is split
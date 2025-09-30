const accountID = 144553
let accountEmail = "xyz@gamil.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

console.log(accountID)
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


//accountID = 435 //const cannot be changed
accountEmail = "abc.google.com"
accountPassword = "8756"
accountCity = "Indore"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
//it is not necessary to put semicolon (;) in JavaScript


/* 
prefer not to use var because of 
issues in block scope and functional scope
*/

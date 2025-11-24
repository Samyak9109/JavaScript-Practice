// Immediately Invoked Function Expressions (IIFE)


(function chai(){ // named IIFE -> Immediately Invoked Function Expression
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // invoked right after defining //semicolon is important here
//TO prevent polluting global namespace iife is used


( (name) => { //anonymous IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // output: DB CONNECTED TWO hitesh


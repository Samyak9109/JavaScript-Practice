const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// creates array within an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat returns new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator spreads elements of array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// flat method flattens the array, Infinity parameter flattens all levels of nested arrays
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if the variable is array or not
console.log(Array.from("Hitesh")) // converts string to array
console.log(Array.from({name: "hitesh"})) // converts object to array , returns empty array as object is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// creates array from the given arguments
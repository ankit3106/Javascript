const marvel = ["thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc) // do not use this 
// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);

// Can also use spread

const all_heroes = [...marvel, ...dc] // can add more than 2 arrays at once
console.log(all_heroes);

const another_arr = [1,2,3,[4,5,6],7,[8,[9,10]]]
console.log(another_arr);

const new_another_arr = another_arr.flat(Infinity) // specify depth to be flat in the brackets of flat 
console.log(new_another_arr);


console.log(Array.isArray("Ankit")); // checks if element is array 
console.log(Array.from("Ankit")); // converts to array
console.log(Array.from({name:"Ankit"})); // interesting bcz it can't choose either to change the key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // converts to array

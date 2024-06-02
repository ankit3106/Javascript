//  primitive
// 7 types : string, number, boolean, null , undefined, symbol, bigint


// Refernce(Non Primitive)
// Array, Objects, functions


const heros = ["ankit", "bhandari"];

let myObj = {
    name: "ankit",
    age : "19",
}

const myFunction = function(){
    console.log("Hello World");
}

const a = Symbol('123')
const b = Symbol('a')
console.log(typeof b);
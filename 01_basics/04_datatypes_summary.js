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

// const a = Symbol('123')
// const b = Symbol('a')
// console.log(typeof b);


// *********************************************
//
// Stack(Primitive) , Heap(Non Primitive)

let myName = "ankit"
let name = myName
name = "Luffytarow"

console.log(myName);
console.log(name);

let user = {
    email : "ankit@google.com",
    upi : "ankit@oksbi",
}

let userTwo = user

userTwo.email = "luffy@gmail.com"

console.log(user.email);
console.log(userTwo.email);

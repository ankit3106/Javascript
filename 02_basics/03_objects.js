// singelton

// object literals

const mySym = Symbol("Key1")

const obj = {
    name: "ankit",
    age: 20,
    "full name" : "Ankit Bhandari",
    [mySym]:"myKey1", // to use as a symbol use this syntax of square brackets
    location:"Pithoragarh",
    Email: "luffytarow13@gmail.com",
    weeksDays: ["Monday","Tuesday"]
}

// console.log(obj.Email); // obj. is used to access the values of an object 
// console.log(obj["full name"]) // square brackets are also used to access the values of object
// console.log(obj["age"]); // used in specific places
// console.log(typeof mySym);

// obj.Email = "ife2022006@iiita.ac.in"
// console.log(obj["Email"]);

// If you want that no change should be done in the object use freeze

// Object.freeze(obj) 
obj.Email = "ife2022006@iiita.ac.in"
// console.log(obj);

obj.fun = function() {
    console.log("Hello Ankit");
}
obj.funtwo = function(){
    console.log(`Hello Ankit, ${this.age}`)
}

console.log(obj.fun());
console.log(obj.funtwo());

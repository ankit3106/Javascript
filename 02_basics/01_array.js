const arr = [0,1,2,3,4,5]
const heroes = ["ironman", "thor"]

const arr2 = new Array(1,2,3,4)
// console.log(arr2);

// Array Methods

// arr.push(6)
// arr.pop()

// arr2.unshift(9) // push from the start
// console.log(arr2);

// console.log(arr2.includes(8)) // check the element is present on the array returns bool value

const newarr = arr2.join() // makes the arr to string

// console.log(arr2);
// console.log(typeof newarr);

// slice , splice

console.log("A", arr2); // prints original array

const new1 = arr2.slice(1,3) // from 1 to 2 ind
console.log("slice",new1); 
console.log("B" , arr2); // original array reamins same

const new2 = arr2.splice(1,3) // form 1 to 3 ind but original array will not have elements from 1 to 3 ind
console.log("splice",new2);
console.log("C",arr2); // original array will get changed
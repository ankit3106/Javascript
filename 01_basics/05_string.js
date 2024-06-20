const name = "ankit"
const cnt = 13

// console.log(name + cnt + " value");

console.log(`Hello my name is ${name} and my cnt is ${cnt}`); // Moderen Way

const gameName = new String('ankittt')

console.log(gameName.toUpperCase());

const newstr = gameName.substring(1,2)
console.log(newstr);
  
// const anotherstr = gameName.slice(-3,4)
// console.log(anotherstr);

const newstrOne = "     ankit    "
console.log(newstrOne);
console.log(newstrOne.trim());

const url = "https://ankit.com/ankit%13bhandari"

console.log(url.replace('%13','-'));

console.log(url.includes('ankit'));
console.log(url.includes('mango'));

const str1 = "ankit bhandari"
console.log(str1.split(' '));


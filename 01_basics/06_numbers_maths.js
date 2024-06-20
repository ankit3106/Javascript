const score = 40
// console.log(score);

const bal = new Number(200)
// console.log(bal);

// console.log(bal.toString());
// console.log(bal.toFixed(3)); // Precision value after decimal

const otherNum = 29.8966
// console.log(otherNum.toPrecision(4)); // Precision value from the start before decimal

const hund = 1000000
// console.log(hund.toLocaleString('en-IN')); // 10,00,000

////////////////// MATHS///////////////////

console.log(Math);

console.log(Math.abs(10-13));
console.log(Math.round(5.6)); // round off


console.log(Math.random()); // value always between 0 and 1
console.log((Math.random()*10) + 1); // to avoid 0 we add 1
console.log(Math.floor(Math.random()*10) + 1); // to avoid 0 we add 1

const mn = 10
const mx = 20

console.log(Math.floor(Math.random() * (mx - mn + 1)) + mn);


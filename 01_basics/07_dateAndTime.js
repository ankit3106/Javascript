let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let createDate = new Date(2023,1,29) // month start from 0 to 11
// console.log(createDate.toDateString());

// let newDate = new Date("01-14-2024")
// console.log(newDate.toLocaleString());

// let nowDate = Date.now()

// console.log(nowDate);
// console.log(newDate.getTime()); // to compare time

// console.log(Math.floor(Date.now()/1000)); // to convert to seconds

let date = new Date()
// console.log(date);
// console.log(date.getMonth() + 1); // month start with 0
// console.log(date.getDay());

date.toLocaleString('default',{
    weekday: "long",
})

console.log(date);




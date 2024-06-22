const user = {
    username : "Ankit",
    id : 13,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`)
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "luffytarow"
// user.welcomeMessage();


// const momo = function(){
//     let name = "Ankit"
//     console.log(this,name);
// }
// momo()  -> undefined

const momo = () => { // Arrow Function
    let name = "Ankit"
    console.log(this);
}

// momo()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ankit"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

 



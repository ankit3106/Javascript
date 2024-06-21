function solve(num1,num2){
    return (num1+num2);
}

const ans = solve(3,5);
// console.log(ans);

function loginUserMessage(username = "sam"){ // default value "sam" if undefined value is passed then automatically "sam" will get print
    if(!username){
        console.log("Enter valid username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ankit"));

function calculateCartPrice(...num1){ // "..." rest operator : makes the array if multiple values are passed  
    return num1
}
console.log(calculateCartPrice(200,300,400))

const user = {
    name : "Ankit",
    id : 13
}
function handleUser(anyobj){
    console.log(`Username is ${anyobj.name} with id : ${anyobj.id}`);
}
handleUser(user);



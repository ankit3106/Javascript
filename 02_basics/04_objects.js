// const user = new Object() //constructor type declaration

const user = {} // literal type declaration 

// The main difference between the two type of declaration is that constructor type is a "singelton" while literal type is not 

user.id = "124ajgp"
user.name = "Luffy"
user.isloggedin = false 
// console.log(user);

const anotherUser = {
    email : "some@gamil.com",
    fullname : {
        userfullname : {
            firstname:"Ankit",
            lastname:"Bhandari" 
        }
    }
}
// console.log(anotherUser.fullname.userfullname.firstname);
// console.log(anotherUser.fullname?.userfullname.firstname); // this ? syntax is also used to check if fullname exist in anotherUser or not

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}

// {} = Target , rest are source

// const obj3 = Object.assign({},obj1,obj2) // isme obj1 change nhi hoga
// const obj3 = Object.assign(obj1,obj2) // isme obj1 aur obj3 same bn jayenge

// console.log(obj1);
// console.log(obj3);

const obj3 = {...obj1,...obj2} // use this
// console.log(obj3);

const users = [ // array of objects
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"another@gmail.com"
    }
]
// console.log(users[0].email)
// console.log(user); 

// console.log(Object.keys(user)); // array of keys
// console.log(Object.values(user)); // array of values
// console.log(Object.entries(user)); // array of values 

// console.log(user.hasOwnProperty('idd')); // return true if the given key exist in the object or not


// Destructure

const course = {
    coursename:"chai aur js",
    courseprice:"free",
    courseinstructor:"Hitesh"
}
const {courseinstructor:instructor} = course // now we can use instructor in place of courseinstructor and access the same value

console.log(instructor);

// API 

// JSON Format

// {
//     "name":"Ankit",
//     "id":13,
//     "age":21
// }
[
    {},
    {}
]







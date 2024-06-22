const num = [1,2,3]

// const total = num.reduce( function (acc, cur) {
//     console.log(`acc : ${acc} , cur : ${cur}`)
//     return acc+cur;
// }, 0)

const total = num.reduce( (acc, cur) => acc+cur, 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totPrice = shoppingCart.reduce((acc,cur) => acc+cur.price, 0)
 
console.log(totPrice);
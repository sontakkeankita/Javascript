const myNums = [1,2,3];
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} , currval : ${currval}`);
//     return acc + currval;
// },0)  here 0 is the initial value

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        item : "shirt",
        price: 999
    },
    {
        item : "Jeans",
        price: 7493
    },
    {
        item : "kurtii",
        price: 450
    }
]
const PriceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(`Total Price is : ${PriceToPay}`);
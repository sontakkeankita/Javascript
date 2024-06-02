const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=>num>4)
console.log(newNums);   //[ 5, 6, 7, 8, 9, 10 ]

const numbers = [1,4,7,2,9,5];
const newNum = []
numbers.forEach((num)=>{
    if(num>4){
        newNum.push(num);
    }
})
console.log(newNum);

const numbers = [1,2,3,4,5,6,7,8,9];

const newn = numbers.map((num) => num+10);
 console.log(newn);

//chaining
const myNum = numbers
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=> num>=40);
console.log(myNum);
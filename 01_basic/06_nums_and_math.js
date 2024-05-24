const balance = new Number(100);
console.log(balance); //[number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.567;
console.log(otherNumber.toPrecision(3)); //124

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,00,000



console.log(Math.abs(-4));  // 4
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(4,8,1,5)); //1
 

console.log(Math.random());  // value comes in between 0 and  1
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random())*(max-min+1) + min);

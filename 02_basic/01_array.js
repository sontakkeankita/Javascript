// shallow copy of an object is a copy whose properties share the 
// same reference as those of source object from which the copy was made

// deep copy do not share the same reference

const myArr = [1,2,3,4];
const heroes = ["abhi" , "shivam" ,"Raj"];

const car = new Array(1,2,3,4)
console.log(myArr[1]);

console.log(myArr.push(6));

myArr.unshift(9);   // 9 prints at starting
myArr.shift(); // remvoes value which we added in unshift
console.log(myArr) 

console.log(myArr.includes(9)); // true or false

const newArr= myArr.join()
console.log(myArr);
console.log(newArr);  // gives number in string format

console.log("A", myArr);  // A [1,2,3,4,6]

const myn1 = myArr.slice(1,3);
console.log(myn1); // [2,3]

console.log("B " , myArr); // B [1,2,3,4,6]
  

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);   // [ 2, 3, 4 ]


// slice(): The slice() method is used to extract a portion of an array and returns 
// a new array containing the extracted elements. splice(): The splice() method is used to 
// change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

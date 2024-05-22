// typescript doesnt allow to compare 2 different datatype
console.log("2" > 1); // true , automatically converts 2 to the number
console.log("02" > 1);

// comparison convert null to a number , treating as 0

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); // true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false

// === checks value as well as datatype
console.log("2"== 2);  // true
console.log("2" === 2);  // false


let score="33"; // when written undefined instead of 33 the gives NaN
console.log(typeof score); // string
console.log(typeof (score)); // string

let ValueInNumber = Number(score);
console.log( typeof ValueInNumber);

// "33" => 33
// "33abc" => NaN
// true = 1

// operations
let value = 3;
let negative = -value;
console.log(negative);


let str1="Ankita";
let str2 = " Sontakke";
let str3 = str1 + str2;
console.log(str3);

// why string to number confusion is confusing ?
console.log("1"+2); // 12 , string first hai to sabhi ka string mai conversion ho jayega.=
console.log(1+"2");  // 12
console.log("1"+2+2); // 112
console.log(1+2+"2"); // 32  , agar string last mai hai toh pahle jo conversion hai wo ho jayega.


let gamecounter=100;
gamecounter++;   // 101
++gamecounter;   // 101
console.log(gamecounter); 
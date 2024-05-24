// primitive
// 7 types : string , number , boolean , undefined , Null , BigInt , symbol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); // false

// Reference (Non Primitive)
// Array , Object , Function

//array
 const heroes = ["Varun","aditya","shahid"];

 //object
 let myObj = {
    name:"varun",
    age: "25",
 }

 //function
 const myFunction = function(){
    console.log("hello");
 }
 
 // typeof(null) gives result object



 // two types of memory
 // stack memory (used in primitive datatypes)
 // Heap memory (used in non primitive)

 // when the stack memory is declared it means we get the copy of the variable
 // when the heap memory is declared it means we get the reference of original value (jo change krogo wo original value mai hoga) 
 // of the variable

let MyYoutubename = "Ankita_Sontakke";

let anothername = MyYoutubename
anothername = "ChaiAurJavascript"

console.log(MyYoutubename);  // Ankita_Sontakke
console.log(anothername);  // ChaiAurJavascript





let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne;
userTwo.email = "ankita@google.com";
console.log(userOne.email);    // ankita@google.com
console.log(userTwo.email);   // ankita@google.com
 // here above whatever we update then changes occurs in the original memory 
 // which is in the heap hence prints same for both bcoz changes occured in original not in copy
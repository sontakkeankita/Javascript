const country = ["india" , "uk","paris"];
const state = ["Maharashtra" , "panjab" ,"Rajasthan"];

const ans = country.concat(state);
console.log(ans);


//spread is used to spread the array
const nw = [...country , ...state];
console.log(nw);


const another_array = [1,3,[4,5,6],7,[4,6[2,5]]];
const real = another_array.flat(Infinity);
console.log(real);


console.log(Array.isArray("Ankita")); // false
console.log(Array.from("Ankita"));  // ['A','n','k','i','t','a']


console.log(Array.isArray.from({name:"Ankita"}));

let score1 =100;
let score2 =100;
let score3 =100;
console.log(Array.of(score1,score2,score3)); // [100,100,100]

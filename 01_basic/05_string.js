const name = "Ankita";
const nickname = "Anku";

console.log(`Hello to ${name} inshort ${nickname}`);

const Sname = new String("Anusha");
console.log(Sname);
console.log(Sname.length);
console.log(Sname[0]);
console.log(Sname.charAt(2));
console.log(Sname.indexOf('u'));
console.log(Sname.toUpperCase());
console.log(Sname.__proto__);

const newString = Sname.substring(0,4)
console.log(newString);  // anus

const anotherString = Sname.slice(-8,3);
console.log(anotherString);  // anu , it start like reverse 

const stringOne = "    Ankita   ";
console.log(stringOne); //    Ankita
console.log(stringOne.trim()); //  Ankita (removes starting , ending space)

const url = "https://ankita.com/ankita%20sontakke";
console.log(url.replace('%20','-'));  // https://ankita.com/ankita-sontakke
console.log(url.includes("ankita"));  // true
console.log(Sname.split('-'));
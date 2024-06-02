const myObject ={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key); // prints 0 1 2 3 4 
    console.log(programming[key]); // prints js rb py java cpp
}

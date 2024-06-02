// Immediately invoked function Expression (IIFE)
// if we remove the parenthesis before function it doesnt execute
(function chai (){
    console.log(`DB Connected`);
})();

// ()() first for defination and second for execution
// in interview tell like: global scope ke pollution se problem hoti hai kai barr
// so uske jo bhi varibales hai usko hatane ke liye iife ka use krte hai
// below code also works but need to add semicolon at the end of above iife function , 
// if we dont add semicolon in above then it doesnt work
( () => {
    console.log(`DB Connected2`);
})();


( (name) =>{
    console.log(`My name : ${name}`);
})('ankita')

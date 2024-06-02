/*
const user={
    username : "ankita",
    price:999 ,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // prints all current values
    }
}
user.welcomeMessage(); // prints ankita
user.username = "sam";
user.welcomeMessage(); // prints sam , print the current context
*/

// regular functions
/*
const chai = function(){
    let username = "anku",
    console.log(this.username);

}
*/ 

// arrow functions
/* const chai = () => {
    let name = "anku"
    console.log(this);
}
chai();
*/

const addTwo = (num1,num2) =>  num1 + num2

// when wrap in parenthesis no need to write return keyword
// but if wrapped in curly braces need to write return

const addFour = (num1,num2) =>  {username:"ankk"} // not executes
const addFive = (num1,num2) =>  ({username:"ankk"}) // now executes
console.log(addTwo(3,4));





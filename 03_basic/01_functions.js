/* function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,2);
*/


function addNumbers(number1 , number2){
    let result = number1 + number2;
    return result;
    // or return number1+number2;
}

const result = addNumbers(3,4);
console.log(result);


function loginUserMsg(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return ` Welcome ${username} to coding world `;
}
console.log(loginUserMsg());


function addCartPrice(...num){
    return num;
}
console.log(addCartPrice("100","200","300","400"));   //[ '100', '200', '300', '400' ]


function addCartPrice(val1,val2,...num){
    return num;
}
console.log(addCartPrice("100","200","300","400"));   // [ '300', '400' ] val1 takes 100 and val2 takes 200



const user = {
    username : "ankita",
    price : "1cr"
}

function handleObject(anyfunction){
    console.log(`username is ${anyfunction.username} and price is ${anyfunction.price}`);
}
console.log(handleObject(user));



const newArr = [200,400,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArr));
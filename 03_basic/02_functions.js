function one (){
    const username = "Ankita";
    function two (){
        const website = "youtube";
        console.log(username);
    }
     // console.log(website);   // cant access website bcoz it has local scope
     // this will show error and hence futher part doesnt executes
     two();  // ankita
}
one();




if(true){
    const username = "anvi";
    if(username === "anvi"){
        const website = " youTube";
        console.log(username + website);
    }
   // console.log(website);  // error bcoz accesed out of  local scope
}
// console.log(username)  // error bcoz accesed out of  local scope




// *********** important ************
// This runs properly
console.log(addone(5));
function addone(num){
    return num + 1;
}


// This shows error bcoz here we are storing it in variable and accessing it before its declaration
console.log(addTwo(5));
const addTwo = function(num){  // also called as expression
    return num+2;
}

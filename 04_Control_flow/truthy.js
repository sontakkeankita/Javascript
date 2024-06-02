const userEmail = "ankita@gmail.com"
if(userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

// falsy values : false , 0 ,-0 , BigInt 0n, " ",
// null , undefined , NaN


// truthy values : "0" , 'false' , " " , [], {} ,
// function(){} 


// Nullish Coalescing Operator (??) : null undefined
// let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10   // 10
// val1 = undefined ?? 10   // 10
// val1 = null ?? 10    ?? 20   // 10


// Terniary operator
// condition ? true : false

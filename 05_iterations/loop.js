for(let index=0 ; index<10 ; index++){
    const element = index;
    console.log(element);
}

for(let i=0; i <= 5; i++){
    console.log(`outer loop ${i}`);
    for(let j = 0; j <= 5; j++){
       // console.log(`inner loop ${j} and inner loop ${i}`);
       console.log( i + "*" + j + "=" + i*j);
    }
}

let myArray = ["superman", "batsman","crickter"];
console.log(myArray.length);
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}



// break and continue
for(let index = 0 ; index <= 10; index++){
    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is : ${index}`);
}


for(let index = 0 ; index <= 10; index++){
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is : ${index}`);
}
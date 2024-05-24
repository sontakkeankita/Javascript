// 1)  Given a string , reverse each word in a string 
// ans : flesyM atiknA ekkatnoS
var str="Myself Ankita Sontakke";

var savedStr=str.split(" ")
.map(function(word){ // we can use for each also instead of map
    return word.split("").reverse().join("")
})
console.log(savedStr.join(" "));



// 2) how to check if an object is an array or not ?
// provide some code
function checkArray(elem){
    return Array.isArray(elem);
}
console.log(checkArray([])); // return true as its array
console.log(checkArray({})); // return false as its object




// 3) how to empty an array in javascript 
// do not reset it to new array
// do not loop through pop each element
var arr=[1,2,3,4,5,6];
console.log(arr.length=0);



// 4) How to check if number is an integer
var a=12;
if(a % 1 === 0){
    console.log("Integer");   // 12%1=12 and remainder 0 , 12.5%1=12 and remainder .5
}
else{
    console.log("Not integer");
}



// 5) Make this work :
// duplicate([1,2,3,4,5]);
// output = [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5]));




// 6)  write javascript function that reverse a number
// approach 1
function reverse(num){
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverse(12));

// approach 2
function reverseNumber(num1){
    var rev=0;
    while(num1>0){
        var lastdigit=num1%10;
        rev=rev*10+lastdigit;
        num1=Math.floor(num1/10);
    }
    return rev;
}
console.log(reverseNumber(1234));



// 7) write a javascript function that checks whetehr
// a number is palindrome or not
function palindrome(str){
    var reversed=str.split("").reverse().join("");
    if(reversed===str) return true;
    else return false;
}
console.log(palindrome("poop"));
console.log(palindrome("loop"));




// 8) Write a javascript function that returns a passed
// string with letters in alphabetical order
function alphabetical(str){
    return str.split("").sort().join("");
}
console.log(alphabetical("apple"));



// 9) write js function that accepts a string as a parameter and 
// converts the first letter of each word of string in upper case
 function capitalize(str){
    var allwords=str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.substring(1);
    })
    return allwords.join("");
 }
 console.log(capitalize(" harsh bhai kaise ho"));




 // 10) write a js function to get the number of occurences of 
 // each letter in specified string
 function occ(str){
    var occurences={};
    str.split("").forEach(function(elem){
        if(occurences.hasOwnProperty(elem)===false){
            occurences[elem]=1;
        }
        else{
            occurences[elem]++;
        }
    })
    return occurences;
 }
 console.log(occ("apple"));




 // 11) loop an array and add all members of it
 var arr=[1,2,3,4,5,6];
 var sum=0;
 arr.forEach(function(elem){
    sum=sum+elem;
 })
 console.log(sum);




 // 12) In an array of numbers and strings only add those
 // members which are not string
 var arr=["hey",123,"hi",12];
 var sum=0;
 arr.forEach(function(elem){
    if(typeof elem === 'number'){
        sum=sum+elem;
    }
 })
 console.log(sum);




 // 13) Loop an array of objects and remove all objects
 // which dont have gender's value male
 // break out only after first one
 var arr=[
    {name:"abhay",gender:"male"},
    {name:"anvi",gender:"female"},
    {name:"aryan",gender:"male"},
 ];
 var count=0;
 arr.forEach(function(elem){
    if(elem.gender !== "male") count++;
 })
 // for removing one non-male
 for(var i=1;i<=count;i++){
 for(var j=0;j<arr.length;j++){
    if(arr[j].gender !== "male"){
        arr.splice(i,1);
    }
}
 }
 console.log(arr);
// the difference between forEach and for loop is that
// we cant break out from forEach loop




// 14) write js function to clone an array
function cloneArr(arr){
    return [...arr];
}
var newArr=cloneArr([1,2,3,4]);
console.log(newArr);

// approach 2
function cloneArray(arr1){
    var newarr=[];
    arr.forEach(function(e){
        newarr.push(e);
    })
    return newarr;
}
var abcd=[1,2,3,4,5,6]
 var newarr=console.log(cloneArray(abcd));

// approach 3
function clone(arr){
   return arr.map(function(e){
        return e;
    })
}
var newarr=clone([1,2,4,5,6]);
console.log(newarr);





// 15) write a js function which accepts an argument and return type
// note : there are 6 possible values that typeof returns : object , boolean , 
// function , string and undefined
function typeTeller(elem){
    return typeof elem;
}
console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("12"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () { }));




// 16) write a js function to get first element of an array
// passing a parameter 'n' will return the last 'n'
// elements of the array
function retrieve(arr,n=1){
    if(n<=arr.length){
        for(var i=0;i<n;i++){
            console.log(arr[i]);
        }
    }
    else{
        console.log(n+"toh elements nhi hai")
    }
}
retrieve([1,2,3,4,5],4);




// 17) write a js function to get last element of an array
// passing a parameter 'n' will return the last 'n'
// elements of the array
function retrieves(arr,n=1){
    if(n<=arr.length){
        for(var i=0;i<n;i++){
            console.log(arr[arr.length - 1 - i]);
        }
    }
    else{
        console.log(n+"toh elements nhi hai")
    }
}
retrieve([1,2,3,4,5],2);




// 18) write a js program to print most frequent item of an array
function freq(arr){
    var freq={};
    arr.forEach(function(elem){
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem]=1;
    })
    var ans=Object.keys(freq).reduce(function(acc,num){
        return freq[acc]>freq[num]?acc:num;
    })
    console.log(ans);
}
freq([1,2,3,12,2,3,12,1,2,3,2121]);





// 19 ) write a js program to shuffle an array
function shufflekaro(arr){
    var totalshufflearea=arr.length;
    while(totalshufflearea > 0){
    totalshufflearea--;
    var indextobeexchanged=Math.floor(Math.random()*totalshufflearea);
    var temp=arr[totalshufflearea];
    arr[totalshufflearea]=arr[indextobeexchanged];
    arr[indextobeexchanged]=temp;
    }
    return arr;
}
console.log(shufflekaro([1,2,3,4,5,6,7]));




// 20) write a js program to compute union of 2 arrays
// data : (union ([1,2,3],[100,2,1,10]));
// ans : [1,2,3,10,100]
function union(arr1,arr2){
    return [...new Set(arr1.concat(arr2))];
}
console.log(union([1,2,3,4],[2,3,4,6]));


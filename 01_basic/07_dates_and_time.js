let myDate = new Date();
console.log(myDate.toString()); //Fri May 24 2024 10:30:06 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); //Fri May 24 2024 24/5/2024, 10:31:53 am

console.log(typeof myDate);  // object

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());
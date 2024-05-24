// when built through literals then not singleton.
// through constructor always singleton
 // object.create : constructor method

 // object literals

 const mySym = Symbol("key1"); // this step is also necessary before using symbol in object

 const jsuser = {
    name : "Ankita",
    [mySym] : "mykey1",  // symbol
    age : 20,
    email : "ankita@gmail.com",
    location : "Pune"
 };

 console.log(jsuser.email); //ankita@gmail.com
 console.log(jsuser["email"]); //ankita@gmail.com

 // console.log(typeof jsuser.mySym);  // string but we want a symbol
 console.log(typeof jsuser[mySym]); // mykel , for making it symbol we need to use syntax [mySym] in declaration also and while printing also


 // for changing mail we can do like thsi
 console.log(jsuser.email="ankita@atlassian.com");  //ankita@atlassian.com


 // After freezing the object no changes will occur further
  // Object.freeze(jsuser);
  // jsuser.email = "ankita@hitachi.com";
  // console.log(jsuser);


  jsuser.greeting = function(){
    console.log("welcome to programming world");
  }
  console.log(jsuser.greeting());

  jsuser.greetingtwo = function(){
    console.log(`Hello ${this.name} , welcome coder`);
  }
  console.log(jsuser.greetingtwo()); //Hello Ankita , welcome coder
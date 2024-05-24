// const tinderuser = new Object() // singleton object
const tinderuser = {}  // non singleton object
tinderuser.id = "abc124";
tinderuser.name = "sam";
tinderuser.IsLoggedin = false;

console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            name:"ankita",
            nickname :"anku"
        }
    }
};
console.log(regularUser.fullname.userfullname);

/*
const val = {1:"a", 2:"b"};
const vall = {3:"c", 4:"d"};

const valll = Object.assign{{},val , vall} // used to combine 2 arrays
console.log(obj3);




*/
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
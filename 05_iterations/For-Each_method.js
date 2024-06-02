const coding = ["js","ruby","java","python","cpp"];

coding.forEach(function(item){
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding =[
    {
        languageName : "java",
        filename : "java"
    },
    {
        languageName : "c++",
        filename : "cpp"
    },
    {
        languageName : "python",
        filename : "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.filename);
})
// for of loop
const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}


// map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('fr',"france")
map.set('IN',"India")
console.log(map);


for(const [key,value] of map){
    console.log(key ,":",value);
}


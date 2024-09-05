//for of loops
// let arr=[1,3,5,7,9,11]
// for (const num of arr) {
//     console.log(num);
    
// }

// let greet="Jai shree Ram"
// for (const char of greet) {
//     console.log(`each character of the string is:${char}`);
//     }

//Maps in JS are Objects that store the values in key and value pairs,without redundancy.

// const map=new Map()
// map.set('IN','india')
// map.set('AUS','Australia')
// map.set('UK','United Kingdom')

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

// const obj1={
//     name:"sanyam",
//     password:"awesome300"
// }
// for (const key of obj) {
//     console.log(key);
//     }//obj is not iterable

//we use forin loop to iterate in the objects

// for (const key in obj1) {
//     console.log(`the ${key} of the user is ${obj1[key]}`);
// }
//so that is how we iterate through an object

// let prog=['js','cpp','ruby','python']
// for (const key in prog) {
//      console.log(key);//0,1,2,3
//     console.log(prog[key]);//js,cpp,ruby,python

    
// }

//NOTE:we cannot iterate through map using forin loop

//foreach, it is a higher order function

//  let prog=['js','cpp','ruby','python']

// prog.forEach(function (item) {console.log(item)})//one way

// prog.forEach((item)=>{console.log(item);
// })//using arrow func

// prog.forEach(printme);
// function printme(item){
//     console.log(item);
// }

// prog.forEach((item,index,arr)=>{console.log(item,index,arr)})

let lang=[{
    language:"javascript",
    extension:"js"
},
{
    language:"java",
    extension:"java"
},
{
    language:"python",
    extension:"py"
},
{
    language:"c++",
    extension:"cpp"
}
]

lang.forEach((item)=>{
    console.log(item.extension);
    
})



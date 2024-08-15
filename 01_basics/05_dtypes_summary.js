//broadly divided in two groups on the basis of how they are provided for access

//primitive datatypes:call by value means their copy is provided for access from the memory.

//total 7 types:String,Number,bigInt,null,undefined,Symbol,boolean

//Non primitive:call by reference as their true reference is provided 
//Arrays,objects,functions
//datatype of the objects and the arrays are obejects and of functions is object function

// const myobj={
//     name:"sanyam",
//     class:3,
//     rollno:"123"

// }
// console.log(typeof myobj);
// const myfun=function(){
//    console.log("hello ");
   
   
// }
// console.log(typeof myfun);

//============================================
//STACK AND HEAP MEMORY IN JS
// Stack memory is allocated to all the primitive datatypes
//Heap memory is allocated to all the non primitive datatypes.

let score1=100;
let score2=score1;
score2= 200;
console.log(score1);//change in the score2 will not be reflected in the score1 becoz primitive datatype don't provide reference of the value but their copy.

console.log(score2);

//now let's see for non primitive dtypes

let myobj1={
    name:'sanyam',
    upi:'san@ybl'
}
let myobj2=myobj1;

myobj2.upi='sanyam@ybl';

console.log(myobj1.upi);
console.log(myobj2.upi);
//this time the value will be changed as reference is provided.
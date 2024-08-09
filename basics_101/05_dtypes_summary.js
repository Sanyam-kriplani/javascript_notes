//broadly divided in two groups on the basis of how they are provided for access

//primitive datatypes:call by value means their copy is provided for access from the memory.

//total 7 types:String,Number,bigInt,null,undefined,Symbol,boolean

//Non primitive:call by reference as their true reference is provided 
//Arrays,objects,functions
//datatype of the objects and the arrays are obejects and of functions is object function

const myobj={
    name:"sanyam",
    class:3,
    rollno:"123"

}
console.log(typeof myobj);
const myfun=function(){
   console.log("hello ");
   
   
}
console.log(typeof myfun);

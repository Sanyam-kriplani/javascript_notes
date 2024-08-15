//let,var and const behave differently in terms of the scope.
//there are two types of scope :
//the global scope i.e. the scope throughout the program
//and the block scope which is limited within the {} except for the functions.

//let us understand it through the following ex.

// let a=10;
// const b=20;
// var c=30;

// if(true){
//     let a=10;
// const b=20;
// // var c=30;
// c=30;
//  console.log(a);//it will worl bcz it is in the scope of the a variable.
// }
// console.log(a);//will not work
// console.log(b);//will not work
// console.log(c);//will work which is a problem
//so we should always avoid using the var or not defining the type of variable

// function one(){
//     const user="sanyam"
//     function two(){
//         const website="github"
//         console.log(user + website)
//     }
//     // console.log(website);//error bcz (out of scope accessing)
//     two()
// }
// one()
//so child can access the parent's properties but parent is not allowed to access child's.
//console.log(addone(5));//will not  work bcz we can not try to access any variable before its declaration.this concept is called hoisting.
const addone=function(num){
return num+1;
}
// console.log(addone(5));//will work

console.log(addtwo(7))//will work 
function addtwo(num){
    return num+2;
}
// console.log(addtwo(7))//will work

//++++++++++++++interesting+++++++++++++++


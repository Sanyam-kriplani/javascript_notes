// const sayMyName=function(){
//     console.log("sanyam");
// }
// console.log(sayMyName)//function reference
// sayMyName();

// function addTwoNumbers(number1,number2){
//     return number1+number2;
//     //console.log(number1+number2);
    
// }
// // addTwoNumbers(3,2);
// console.log(addTwoNumbers(5,7));

// function loginUsername(username){
//     if(username===undefined){
//         return `please enter the username`;
//     }
//     return `${username} just logged in.`;
// }
// // console.log(loginUsername("sanyam"));//sanyam just logged in.
// console.log(loginUsername(""));//just logged in.
// console.log(loginUsername());//undefined just logged in.

// console.log(loginUsername());//please enter the username

//using the ! mark

// function loginUsername(username){
//     if(!username){
//         return `please enter the username`;
//     }
//     return `${username} just logged in.`;
// }
// console.log(loginUsername());

//setting the default value

function loginUsername(username="sam"){
    
    return `${username} just logged in.`;
}
// console.log(loginUsername());
// console.log(loginUsername("sanyam"));


// how to handle unknown no. of args in functions.i.e. when we dont know how many values are coming
//it is done using the rest operator(...) same symbol as spread operator but they differ at the usecases.
//as spread operator is used to spread out the elements of an array or the properties of an object into another array, object, or function arguments.

//while The rest operator is used to collect multiple elements into a single array or object. It is often used in function parameters to gather all remaining arguments into an array.

function numReturn(...num1){
    return num1;
}
console.log(numReturn(5,6,7,8,9));//[ 5, 6, 7, 8, 9 ]
//passing the obj in the function
// const user={
//     name:"sam",
//     price:199
// }

// function getprice(anyobject){
//     console.log(` the price of the course that ${anyobject.name} purchased is ${anyobject.price}`);
// }
// getprice(user);

//passing the array in the function

const arr=[200,100,800];

function getSecondVal(anyarr){
    console.log(anyarr[1]);
}
getSecondVal(arr);
getSecondVal([100,500,700]);
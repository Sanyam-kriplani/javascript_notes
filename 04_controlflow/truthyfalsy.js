// const usermail="sanyam@gmail.com"
// if(usermail){
//     console.log("got the email");
//     }
//     else console.log("did not get the email");
// const userno=""
// if(userno){
//     console.log("got the no. ")
// }
// else console.log("enter the no.")


//some values are preassumed to be either true or false by the engine.
//falsy values:
//"",0,-0,false,BigInt 0n,undefined,Nan
//truthy values 
//'0',"false"," ",[],{},fnction(){} anmd everything else is truthy
 //how to check if an object is empty??
//  const user={}
//  if(Object.keys(user).length===0){
//     console.log("object is empty");
    
//  }

 //additional knowledge:0==false-->true
 //false==''-->true
 //0==''-->true

 //NULLISH COALESCING OPERATOR(??)
 //basically used when multiple values are beign fetch there is a chance of  one of them being a null/undefined value,in that case it assigns the next non false value.

//   let val1
//   val1=5??10 //5
// val1=null??10;//10
//  val1=undefined??33
//   console.log(val1);
 
//ternary operator(?)
// let val2=8;
// val2>=10?console.log("no. is greater than 10"):console.log("no. is less than 10");


//tfirst we will discuss about the this key word
//this keywords basically refers to the current context i.e. it refers to the values in the current object in current state.

// const obj={
//     username:"sanyam",
//     price:599,
//     welcome:function(){
//         console.log(`${this.username},welcome to the website`)
// console.log(this);

//     }
// }
//     obj.welcome();
//     obj.username="sam";
//     obj.welcome();

// function chai(){
//     const website="github"
//     console.log(this.website)//undefined that means we cannot use the this keyword in functions to use the vars like we did in the objects.
    
//     }

// chai()

// const chai=function (){
//     const website="github"
//     console.log(this.website)//same result
    
//     }

// chai()

//  const chai=()=>{//arrow function definition
//      const website="github"
//     console.log(this.website)//same result
        
//     }
//  chai()
    
// const addno=(num1,num2)=>{
//  return num1+num2
// }

//implicit return (return without using return )
// const addno=(num1,num2)=>num1+num2//would work fine


// const addno=(num1,num2)=>(num1+num2) 
//agar curly braces lagae to return keyword lagana padega prr paranthesis me bina lagae bhi chal jega

//const addno=(num1,num2)=>{username:"sanyam"}//won't work


// const addno=(num1,num2)=>({username:"sanyam"})//will work just fine
// console.log(addno(5,7));


    
//IIFE stands for immediately invoked functions

//IIFE funcs are used for two main prposes

//1)in case we want to execute a function the moment the site go live.
//2)when we want to protect some variables from teh pollution of global scope variables.

//syntax:()()
//the first parnathesis is for the function definition and second paranthesis is for calling the function, it will accept the args when needed.

(function chai(){//named iife func
    console.log(`chai pee lo`);    
})();//here the semicolon is imnportant bcz without this the iife functions will not recognize the context.only in the case where tehre are more than one iife functions.
(()=>{//unnamed iife func
    console.log(`ya cofee piyoge??`)
})();
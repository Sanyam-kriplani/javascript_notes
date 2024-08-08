const accountId=1222158;//value will not change
let accountName="Sanyam";//to declare the variable in a block scope or functional scope
var accountEmail="sanyam@gmail.com";//should avoid using var because of the problem in block scope and functional scope
accountstate="haryana";
let accountbal;

// accountId=2;//not allowed
console.log(accountId);
console.table([accountId,accountName,accountEmail,accountstate,accountbal]);

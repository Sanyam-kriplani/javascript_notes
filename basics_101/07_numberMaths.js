// let n=18;//in this way the interpreter implicitely decides the datatype to be Number
// let num=new Number(22);//this is the way of explicitely defining the datatype of variable to be a number.
// console.log(n);//will print:18
// console.log(num);//will print:[Number:22]

//similar to the string datatype when we define a number variable in the browser console there is a prototype list of usable methods compatible with a number datatype.

// let num=231.89;
// console.log(num.toString().length);//convert the number to string and count the length
// console.log(num.toPrecision(3));//it calculate the nearest round off/estimate  till the given no. of digits.
// console.log(num.toFixed(4));//it returns the value upto 4 decimal digits.
// let hundreds=1000000;
// console.log(hundreds.toLocaleString())//gives values with comma seperator according to the international number system but we can change it to the indian system.
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++MATH+++++++++++++++++++++++
console.log(Math);//Math is a predefined obeject that has different properties and methods.

console.log(Math.abs(-4));//return the positive of the negative values.

console.log(Math.round(4.8));//gives 5
console.log(Math.round(4.3));//gives 4
console.log(Math.ceil(4.32));//return 5 
console.log(Math.floor(4.32));//return 4
console.log(Math.sqrt(4));//return 2
console.log(Math.pow(2,5));//return 32

//most used Math property
console.log(Math.random());//returns a random value between 0 and 1;
// to us it between the limits of our own choice there is a formula to remember.
let min=20;
let max=40;
console.log(Math.floor(Math.random()*(max-min+1)+min));//now it will return a random value i between max and min only. 



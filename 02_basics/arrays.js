//arrays in js are resizeable
//arrays in js can have all numbers or all strings or all booleans or mix of all.
//there is no convcept of associative array in js
//array heap memory me store hote h 
//inki shaloow copy bnti h matlab they share a common reference point.yani changes in the copy will be reflected in the original value also.

// const numbers=[0,1,2,3,4,5]
// const num2=numbers;
// num2[4]=7;
// console.log(numbers[4]);
// console.log(num2[4]);//changes in the copy will be reflectes in the original values also.
// const heroes=["shaktiman","superman","Hanuman"]

// console.log(heroes[1]);

// //arrays methods
// // numbers.push(9);
// // numbers.pop();//simply pops the last value;

// // numbers.unshift(9);//shift all the numbers forward and add the given no in front.
// // numbers.shift();//remove an element from the start of the array.

// console.log(numbers.includes(11));
// console.log(numbers.indexOf(7));


// const newnum=numbers.join();//binds all the elemens of numbers in a string and assign to nnewnum.

// console.log(numbers);
// console.log(newnum);


//slice and splice very important

let arr=[0,1,2,3,4,5,6]

console.log("A ",arr);
let myn1=arr.slice(1,3);//it doesnot include 3 and will not change the original array.
console.log(myn1);
console.log("B ",arr);

let myn2=arr.splice(1,3);//it will include 3  and will change the original array also.

console.log(myn2);
console.log("C ",arr);





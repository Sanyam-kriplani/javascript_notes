//why we need filter?
// let nums=[1,2,3,4,5,6]
// let nums2=nums.forEach((num)=>{
//     console.log(num);
//     return num;
// })
// console.log(nums2)//undefined
//as we can see in above example the foreach does not return the values from the desired array or string;
//so we need filter.

//filter is an array function that is used to create a new array over the elements of the existiong array.
//it includes only those elements that pass the condintion that i specified into it.

// let mynums=[1,3,5,7,9]
// // let newnum=mynums.filter((num)=>num>4)
// let newnum=mynums.filter((num)=>{return num>4})//if we open scope we need to return the values explicitely
// console.log(newnum);//[ 5, 7, 9 ]

//however this task can be done using the foreach also but it would be a longer process.
// let ans=[]
// let mynum=[1,2,3,4,5,6]
// mynum.forEach((num)=>{
// if(num>4){
//     ans.push(num);
// }
// })
// console.log(ans)
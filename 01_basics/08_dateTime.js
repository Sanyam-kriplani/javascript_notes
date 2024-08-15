// let myDate=new Date();
// console.log(typeof myDate);//object 
// console.log(myDate);
// console.log(myDate.toDateString());//Sun Aug 11 2024
// console.log(myDate.toLocaleDateString());// 8/11/2024
// console.log(myDate.toString());//Sun Aug 11 2024 07:24:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());//2024-08-11T07:27:27.803Z

//different ways of initialization
// let createDate=new Date(2023,0,23);
// let createDate=new Date(2024,8,11,1,3);
let createDate=new Date("01-14-2024");
// console.log(createDate.toString());

let dt=Date.now();
console.log(dt);//return the no of millisecons from  1 jan 1970 till now.
//what to do if i want to convert a date into the millisecons becoz it is easy to comapare in a lot of cases.
console.log(createDate.getTime())//will return the no of millisecond past 1 jan 1970
console.log(Math.floor(dt/1000));//for converting it into seconds

console.log(createDate.getMonth()+1);

console.log(createDate.toLocaleDateString('dafault',{
    weekday:"long"
}))
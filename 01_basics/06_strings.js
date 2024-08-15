// //string concatenation
// console.log("sanyam"+"kriplani");
// //but it is not the preferred way beacause it reduces code readability.so the right way to use it is :
// console.log(`sanyam 
//     kriplani`);//template literals are litereals in the backticks(`) and using it for string is called string interpolation becoz we can directly concatenate multi line strings together
//     let name="sanyam"
//     let lname="kriplani"
//     console.log(`my first name is ${name} and my last name is ${lname}`);

const gameName=new String("sanyam");
/*pototype me hote h string se related sare functions jinhe hum backticks vale format me asaani use kr skte h.
the list can be seen by opening console on the browser and defining a string variable .
//  */
// console.log(`my game name is ${gameName.toLocaleUpperCase()}`);//isme bhi original change ni hui h.
// console.log(`my game name is ${gameName.charAt(3)}`);
// console.log(`my game name is ${gameName.indexOf('n')}`);
// let str="qwerty";
// let str2=str.substring(0,4);
// let str3=str.slice(-8,4);
// console.log(str2);
// console.log(str3);

const url="https:sanyam.com/sanyam%20kriplani"
console.log(url.replace("%20","-"));

let news=" sanyam   ";
console.log(news);
console.log(news.trim());//eliminates white spaces and new ln chars.




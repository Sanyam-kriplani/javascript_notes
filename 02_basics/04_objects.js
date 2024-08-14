//creating object through constructor method
const fbUser=new Object();//singleton obj
fbUser.name="singham";
fbUser.id="123";
fbUser.city="new york";

//nested obj
const regularUser={
    id:132132,
    fullname:{
        userfull:{
        fname:"sanyam",
        lname:"kriplani"
        }
    }
    }
    console.log(regularUser.fullname.userfull?.fname);//question mark is to check if this value exist or not if not move ahead.

    //joining two objects

    const obj1={1:"a",2:"b",3:"c"}
    const obj2={4:"a",5:"b",6:"c"}
    
    // const obj3={obj1,obj2};//wrong way bcz same problem will arise as it did in the case of the arrays(nested arrays)
    // console.log(obj3)
   const obj3=Object.assign({},obj1,obj2)//it basically return all the obj or enum values from all the source args to the target variable.{target,src,src.... }
   console.log(obj3)//now it's perfect!!
//another way to join 2 objmis through spread operators

const obj4={...obj1,...obj2}//most widely used 
console.log(obj4);

//array of objects
const users=[
    {name:"sanyam",age:12},
    {name:"sanya",age:14},
    {name:"sym",age:15},
    {name:"sany",age:19}

]
console.log(users[2].age);

//extracting only keys and values from obj

const keyarr=Object.keys(fbUser);//returns an array consisting of all the keys.
console.log(keyarr);


const valarr=Object.values(fbUser);//returns an array consisting of all the values.
console.log(valarr);

console.log(Object.entries(fbUser));//returns an array of the array in key value pairs.

//checking the existance in the object 

console.log(fbUser.hasOwnProperty("name"));

// //destructuring the object
// //Destructuring an object means taking out specific properties from an object and assigning them to variables in a shorter, more convenient way
// const person={
// name:"john",
// age:18,
// city:"newyork"
// }

// const {name,age,city}=person ;//Now, name, age, and city are variables that hold the corresponding values from the person object.and they can be accessed without the hassle of mentioning the obj name.

// console.log(name);
// console.log(age);
// console.log(city);
 
//JSON:javascript object notation

// {
//     "name":"sanyam",
//     "course":"btech",
//     "id":"1222158",
// }
//also in the form of array of objects
//[{},{},{}]

//json is the most commonly used format in APIs specially inn the modern web development


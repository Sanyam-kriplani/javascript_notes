//++++++++++++OBJECTS ARE THE KING+++++++++++

//objects can be declared in two ways:
//by using literals this will form a non singleton object
//or by using constructor:object.create(),this will form a singleton object.

const mySym=Symbol("key1");
const JsUser={
    name:"Sanyam",
    age:18,
    city:"kurukshetra",
    [mySym]:"mysymbol"
} 

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);
//accessing values of the object

JsUser.name="Sanjay";//one way of doing it

//using get and set methods,they are more secure and are usually used in the mvc (model-view-controller) architecture.


const person={
    fname:"sanyam",
    lname:"kriplani",
    get name(){
        return this.fname;
    },
    set sname(sname){
        this.fname=sname;
    }
}
person.sname="baani";
console.log(person.name);

Object.freeze(JsUser);
//will lock all the vaues and no more changes can be made further

console.log(JsUser)

//adding function

//in the object

const human={
    name:"manav",
    gender:"male",
    height:1.2,
    n:function(){
        return this.name;
    }
}
console.log(human.n());

//outside the object
human.h=function(){
    return this.height;
}
console.log(human.h());




console.log(`the name of the person is ${human.n()} , he is a ${human.gender} and he is ${human.h()}m tall`);//string interpolation



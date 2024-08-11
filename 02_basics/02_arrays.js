const marvel_heroes=["ironman","thor","deadpool","spiderman"];
const dc_heroes=["batman","superman","flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);//gives an output with array in an array.

// //but
// const all_heroes=marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);//will give desired result

//  const new_arr=[1,2,3,[4,5],6,[7,8,[9,10]]];//very problematic situation
// const real_arr=new_arr.flat(Infinity);//flats the array uptill the given depth.
// console.log(real_arr);

console.log(Array.isArray("sanyam"));
console.log(Array.from("sanyam"));
console.log(Array.from({name:"sanyam"}));//returns an empty array as it is not specified to the interpeter that from keys or values,it has to make an array .



let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));




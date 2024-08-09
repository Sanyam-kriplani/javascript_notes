//all normal comparisons work same in the js like ==,>=,<=,<,>,!= etc but that is only when both the operands are of the same dtype
// console.log("2">1);//true
// console.log("02">1);//true


//there may be unexpectes answers when both operands are of diff types.

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null<=0);//true
//it happened becoz the coparison operators convert the values into numbers,so it converted the null into 0.while == doesn't worl the same way so it gives false
// console.log(undefined<=0);//false
// console.log(undefined>=0);//false
// console.log(undefined==0);//false
 
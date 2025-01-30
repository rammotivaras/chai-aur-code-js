
// falsy  values 

// false
// 0
// -0
// 0n
// null
// undefined
// NaN
// BigInt
// ''



// truthy values 
// '0'
// 'false'
// ' '
// []
// {}
// function(){}


// Example 

// const userEmail = [] ;
// if (userEmail.length === 0 ){
//     console.log('Arry is empty');   //Arry is empty
// } 
    

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0 ){
// console.log('object  is empty');

// }

// Nullish Colescing Operator (??): null undefined 

let val1 
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 5
// val1 = null ?? undefined ??  5 ?? 10 ?? 20 

// console.log(val1);



// Ternary Operator 

// condition ? true : false 

const iceTeaPrice  = 100 
iceTeaPrice <= 80? console.log('less than 80') : console.log('more than 80');



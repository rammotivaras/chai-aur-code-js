// reduce 


const myNums = [1,2,3,4] ;

const newNums = myNums.reduce((acc, itt)=>{
 return acc + itt *2
},0)

console.log(newNums);

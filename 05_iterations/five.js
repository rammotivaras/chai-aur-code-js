// forEach (forEach koi bhi value return nahi karta hai)

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach( function (item){
// console.log(item);

// })

// coding.forEach( (val)=>{
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


const myCoding = [
    {
        lenguageName : 'javascript',
        fileName : 'JS'
    },
    {
        lenguageName : 'java',
        fileName : 'Java'
    }, 
    {
        lenguageName : 'python',
        fileName : 'py'
    }, 
    
];

// myCoding.forEach( (item, index)=>{
//     console.log(item.lenguageName, index);
    
// })


const values = coding.forEach((item)=>{
    // console.log(item);
    return item   //undefined
})
console.log(values);

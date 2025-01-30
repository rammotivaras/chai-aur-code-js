var c =300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(c);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = 'ramji'
    function two(){
        const website = 'dwarkahotelsguide.com'
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()


if(true){
    const username = 'ramji'
    if (username === 'ramji'){
      const website = ' dwarkahotelsguide.com'
    //   console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++ interesting +++++++++++++

// we can access before initialization this kind of function 
console.log(addone(5));

function addone(num){
    return num +1
}  



// ReferenceError: Cannot access 'addTwo' before initialization  
console.log(addTwo(7));

const addTwo = function(num){
    return num + 1
}



function sayMyName(){

    console.log("R");
    console.log("A");
    console.log("M");
    console.log("J");
    console.log("I");
}
// sayMyName()

// function addTwoNumbers(num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 + num2);
//     } else {
//         console.log('not a number');
//     }
// }

// addTwoNumbers(2, 4);  // Outputs: 6
// addTwoNumbers(2, 'a');  // Outputs: not a number


// const addTwoNumbers = (num1, num2) => 
//     console.log(typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : 'not a number');

// addTwoNumbers(2, 4);  // Outputs: 6
// addTwoNumbers(2, 'a');  // Outputs: not a number



// function addTwoNumbers (num1,num2){
//     console.log(num1 * num2);
// }
//     const result = addTwoNumbers(2,4)
//     console.log(result);    undefined


// function addTwoNumbers (num1,num2){
//     let result = num1 + num2
//     return result
// }
//     const result = addTwoNumbers(2,4)
//     console.log('result:', result);    
    

function addTwoNumbers (num1,num2){
    return num1 + num2
    
}
    const result = addTwoNumbers(2,4)
    // console.log('result:', result);  
    
    

    // function loginUserName(userName){
    //     if(userName === undefined){
    //         console.log('Please enter userName');
    //         return;
    //     }
            
    //     return `${userName} just logged in` 
    // }

    // const user1 = loginUserName()
    // console.log(user1);
    
    function loginUserName(userName ='raju'){
        if(!userName){
            console.log('Please enter userName');
            return;
        }
            
        return `${userName} just logged in` 
    }
    const user1 = loginUserName('ramji')
    // console.log(user1);

function calculaterCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculaterCartPrice(200,300,400,500,2025));


// add object in function 

function userdata(anyobj){
return anyobj
}

const userdetails = {
    name: 'ramji',
    email:'rK@gmail.com',
    id: 1
}

const val1 = userdata(userdetails)
    // console.log(val1);
    
    // add array in function 

//     function arraysdata(anydata){
//         return anydata[2]
//     }
//    console.log( arraysdata([2,3,4,5,5]));
   
const user = {
    username: 'ramji',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = 'raju'
// user.welcomeMessage()
// console.log(this);     output {} in node inviriment


// this keyword not working in function 

// function chai(){
//     let username = 'ramji'
//     console.log(this.username);
    
// }
// chai()     

// this keyword not working in => function  
// const chai = ()=>{
//     userName('ramji')

//     // console.log(this.userName);
// }
// chai()


// const numTwo = (num1,num2)=>{
// return num1 + num2

// }
// console.log(numTwo(2,7));


// const numTwo = (num1,num2)=> num1 + num2
// console.log(numTwo(2,7));

// const numThree = (num1,num2)=> (num1 + num2)
// console.log(numThree(2,7));

const numFour = (num1,num2)=> ({username: 'ramji'})
console.log(numFour(2,7));

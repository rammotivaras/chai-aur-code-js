 
//  stack (Primitive),  Heap(Non-Primitive)


let myOriginalName = 'ramji';

let anotherName = myOriginalName ;
anotherName = 'lalo';

// console.log(anotherName);
// console.log(myOriginalName);


let UserOne = {
    email : 'user@gmail.com',
    upi : '223sbi',
}

let UserTwo = UserOne; 

UserTwo.email = 'rkotivaras@gmail.com'

console.log(UserOne.email);
console.log(UserTwo.email);


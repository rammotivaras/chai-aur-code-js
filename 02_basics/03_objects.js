
// object ko declear kar ne ke do tari ke hai 
// 1. litral ki tarah 
// or
// 2. constructor ki tarah 


//Singleton
 // constructor se jab bana te hai to woh singleton object banta hai
//  Object.create se jab object banate hai to wah contructor me banta hai usi ko singleton kahte hai 
 // litral se object banega to wah singleton nahi banega



 const mySym = Symbol('key1')

 const JsUser = {
    name : 'ramji',
    'full name' : 'ramji motivaras',
    age : 18,
   [mySym] : 'key1',
    isLoggedIn : false,
    email : 'rkmotivaras@gmail.com',
    location : 'dwarka',
    lastLoginDays : ['Monday', 'Saturday']
}

// console.log(JsUser.email);
// console.log(JsUser['email']);

// console.log(JsUser.full name);  wrong tarika 

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = 'rkmotivarars@gmail.com' 
JsUser.name = 'raju'
// Object.freeze(JsUser)
JsUser.email = 'rk@chatgpt.com'

// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user');
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
    console.log(JsUser.greetingTwo());
    






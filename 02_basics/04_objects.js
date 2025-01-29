// singleton object  => const tinderUser = new Object()

const tinderUser = {} 

tinderUser.id = '123abc'
tinderUser.name = 'ramji'
tinderUser.isLoggedIn = false 
tinderUser.contact = 12314214145

// console.log(tinderUser);


const regularUser = {
    email : 'some@gmail.com',
    fullname: {
        userfullname : {
            firstname: 'ramji',
            lastname : 'motivaras'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// const obj5 = {...obj1, ...obj2, ...obj3} easy way to join use spred operator


// database se data aata hai tab 

const users = [
    {
        id : 1,
        email : 'rk@gmail.com'
    },
    {
        id : 2,
        email : 'rkm@gmail.com'
    },
    {
        id : 3,
        email : 'rkmj@gmail.com'
    }
]

// console.log(users[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('fullname'));



//  *******destructure********


const course = {}

course.coursename = 'JS in hindi'
course.courseprice = 999
course.courseInstructor = 'ramji'

// console.log(course.courseInstructor);


const {courseInstructor : teacher} = course
console.log(teacher);



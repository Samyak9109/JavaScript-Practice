//using Objects as Singleton

// const tinderUser = new Object() //singletion object creation syntax
const tinderUser = {} // object literal syntax , non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // gives object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4)// to merge multiple objects

const obj3 = {...obj1, ...obj2} // spread operator to merge multiple objects
// console.log(obj3);


const users = [ // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // to access array of objects
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // to get keys of object as array
// console.log(Object.values(tinderUser)); // to get values of object as array
// console.log(Object.entries(tinderUser)); // to get key-value pairs of object as array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if object has specific property


const course = { // object literal
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // object destructuring with alias

// console.log(courseInstructor);
console.log(instructor);

// {// object literal shorthand
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[ // array of empty objects
    {}, // empty object
    {},
    {}
]


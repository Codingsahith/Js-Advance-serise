// objects are collection of properties.
// property => (key,value)
const student1 = {
    name : "sahith",
    age : 21,
    city : "hyd"
};
// console.log(student1)
// console.log(student1.name)
// console.log(student1.age)
// console.log(student1.city)

let info = [{
    firstName : "firelord",
    area : "kp",
    pincode : 82798
}];
// console.log(info)

// adding / updating element
const student = {
    name : "sahith",
    age : 21,
    city : "hyd"
};
// adding
student.class = "btech"
// console.log(student)

// updating
student.city = "pune"
// console.log(student)

// deleting 
delete student.city 
// console.log(student)

// nested object
const myinfo = {
    sahith :{
        grade : "A",
        city : "hyd"
    },
    vinesh :{
        grade : "B",
        city : "pune"
    },
    sri :{
        grade : "C",
        city : "ooty"
    }
};
// console.log(myinfo)
// console.log(myinfo.sahith)

// Array object
const myClassinfo = [
    {
        name : "sahith",
        place : "hyd"
    },
    {
        name : "vinesh",
        place: "pune"
    },
    {
        name : "sri",
        place : "ooty"
    }

];
// console.log(myClassinfo)
// console.log(myClassinfo[0].name)
// console.log(myClassinfo[1].name)
// console.log(myClassinfo[2].name)
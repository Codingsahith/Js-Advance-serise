function myName(){
    console.log("hello world");
}
// myName();

function num(sum){
    sum = 2+2;
    // console.log(sum)
}
num();

function adding(a,b){
    console.log(a+b);
}
// adding(2,3);

// return method
function sum(x,y){
    return x+y;
}
// sum(3,2);

// function with objects
const user = {
    username :"sahith",
    age : 21
}

function myInfo(info){
    console.log(`username is ${info.username} and age is ${info.age}`);
}
myInfo(user);

// function with array 
const arr = ["sahith","vinesh","sri"];

function secondArray(myArray){
    return myArray[0]
}
// console.log(secondArray(arr));

// Arrow Function
const mySum = (a,b) => {
    return a+b;
}
console.log(mySum(2,3));



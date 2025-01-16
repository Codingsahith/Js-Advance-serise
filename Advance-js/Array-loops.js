let arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num) // it print each num of the array.
    // console.log(arr) // it prints full arr * arr.length
}

let str = "sahith"
for(firstName of str){
    // console.log(firstName); // it print each letter in next line of the string.
}

const myStr = {
    name : "sahith",
    age : 22,
    city : "hyd"
}
for(const key in myStr){
    // console.log(`${key} is ${myStr[key]}`);
}

const Str = ["sahit","vinesh","sri","cherry",]
for(const Names in Str){
    console.log(Str[Names])
}
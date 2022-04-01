// objects are basically Key Value PAirs..
// Synatx : {name:"Shubham",age:67,color:"Black"} --> object{}
// before colon --> KEy
//after Colon --> Value...

// // Ways to define a Object.....
let obj1 = {};  // empty object  --> in Terms of Boolean -->True
let obj2 = new Object;

// // console.log(typeof obj1, typeof obj2);
// // console.log(Boolean(obj1));
// console.log(obj1)   //--> result will be an empty object

// // how to add key value pairs in a empty or just adding..
 obj1.cars = "BMW";
 console.log(obj1)  //--> //here npt empty object 


//  // different ways to add key value pairs
//  // 1. Dot obj1.cars="BMW"
//  //2 bracket obj1[cars]="BMW"

 obj1["name"]="car"
 obj1["burj khalifa"] = "Dubai"
 console.log(obj1)

 obj2.manufacturer="ford"
 obj2.dhjkshd="snjdshjd"
 console.log(obj2)


// I want to access the value for a particular Key......
console.log(obj2.manufacturer);


// if i want to know how many and what are the keys present in my object..

let data = Object.keys(obj1);  //--> take out all the keys from the objects and put it them in the form of Array & each key is the element of that array
let number = data.length;  // 
console.log(data);  // data is an array but its type is Object? because objects -->objects and Array_-> objects...
console.log(number);
console.log(typeof data,typeof obj1);


let obj3 = {name:"shubham",age:56}
let data2 = Object.keys(obj3);
let data3 = Object.values(obj3);
console.log(data2)
console.log(data3)
// console.log(obj3.length) /// we cannot calculate length of object directly
// thats why we need to Use Object.keys(obj) to first convert all the keys into array elements and then calculate the length of Array.;
console.log(data2.length)

//Syntax of object.key-->  Object.keys(objectName);
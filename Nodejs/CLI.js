// Command Line Arguments....

// iterating over argv array of Global Process Object...

// process.argv.forEach((ele,index)=>{
//     console.log("argv[ "+ index +" ] =" + ele);
//     console.log(typeof ele)
// });


// commander module
var commander = require("commander");
const { json } = require("express");

// process.argv.forEach((ele,index)=>{
    //     console.log("argv[ "+index+" ] = "+ele);
// })


// commander
//  .option("-f,--foo <i>","integer value",parseInt,0)
//  .option("-b, --bar [i]","float value",parseInt,0)
//  .option("-z, --baz","Boolean")
//  .parse(process.argv);

// console.log(commander.foo)
// console.log(commander.bar)
// console.log(commander.baz)


// read data using STDIN

// process.stdin.once("data",(data)=>{
//     var response = data.toString();

//     console.log("your response : " + response);
//     process.stdin.pause();                  // if not present , program will not terminate after execution.
// });

// console.log("what is your name?");
// process.stdin.resume()
// // process.stdin.pause()                        // this will termiate the program after name question

// using setEncoding() to stdin

// process.stdin.once("data",(data)=>{
//     console.log("you said your name is  : " + data);
//     process.stdin.pause();
// });
    
// console.log("what is ur name?");
// process.stdin.setEncoding("utf8"); 
// process.stdin.resume();


// Standard Output (stdout)

// process.stdout.write("Hello world without console.log()")


// formatted string use case:

// var name= "tom"
// var age= 12

// console.log("Hi, my name is %s and my age is %d",name,age); //  direct use case 

// //we can also use formatted types using util.format();

const util= require("util");
// var format1= util.format("hi , my name is %s",name)
// var format2= util.format("hi , my age is %d",age)
// var format3= util.format("hi , my number is %d",name)   // nan because cannot convert char into number

// console.log(format1,format2,format3);

// Other printing methods

// util.log("heoo") // prints arguments with date and time;

// console.info("using info()");

// let obj ={
//     name:"ank",
//     age:12,
//     color:"red"
// }
// console.dir(obj)
// console.dir(1)

// // to stringify the oject we can use util.inspect();

// console.log(util.inspect(obj));

// stringify nested objects

var obj2 = {
    foo:{
        bar:{
            baz:{
                baff:false,
                beff:"string",
                biff:null
            },
            boff:[]
        }
    }
};

// console.log(util.inspect(obj2));
// console.log(JSON.stringify(obj2));   // more precise;

// by default util.insect() recurses through two levels while formatting object, thats why in the first case displays value of baz :[object];

// to be more precise , we can pass another argument to util.inspect() to increase its depth;

// console.log(util.inspect(obj2,{depth:null}));  //show result similar to json.stringify


// Standard Error (stderr);


// console.trace()

// (function a(){
//     (function b(){
//         console.trace("test trace")
//     })();
// })();

// redirecting  stdout

// console.log("foo");
// console.error("bar"); 

// // prints only error because we have redirected the output to output.txt using > in REPL


// TTY Interface



// example giving illusion of multithreaded execution....

// setInterval(function(){
//     console.log("foo");
// },1000);

// setInterval(function(){
//     console.log("bar");
// },1000);

// example verifying node's single threaded nature...

// setInterval(function(){
//     console.log("foo");
//     while(true){

//     }
// },1000);

// setInterval(function(){
//     console.log("bar")
// },1000)

// asynchronous file reading example..

var fs = require("fs");

// fs.readFile("Nodejs/Node_Module_system.js","utf8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

// console.log("reading file.....")

// callBack Hell 

var filename = "Nodejs/Node_Module_system.js";

// fs.exists(filename,(exist)=>{
//     if(exist){
//         fs.stat(filename,(err,status)=>{
//             if(err){
//                 throw err;
//             }
//             if(status.isFile()){
//                 fs.readFile(filename,"utf8",(err,data)=>{
//                     if(err){
//                         throw err;
//                     }
//                     console.log(data);
//                 });
//             }
//         });
//     }
// });



// refactored code to prevent callback hell..
// function cbReadFile(err,data){
//     if(err){
//         throw err;
//     }
//     console.log(data);
// }

// function cbStat(err,stats){
//     if(err){
//         throw err;
//     }
//     if(stats.isFile()){
//         fs.readFile(filename,"utf8",cbReadFile)
//     }
// }

// function cbExistFile(exists){
//     if(exists){
//         fs.stat(filename,cbStat)
//     }
// }

// fs.exists(filename,cbExistFile);


// exception handling..
// try catch and finally...
// try{
// fs.readFile("","utf8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })
// }catch(exception){
//     console.log("The exception was caught...")
// }

// even after using try and catch asynchronous fs call error get thrown from callback in try block , i.e catch plays no role in handling errors//

// try and catch are best for using in Synchronous programming.... 

// Exception handling for asynchronous using global object "process".

// fs.readFile("","utf8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

// process.on("uncaughtException",(err)=>{    // now the error got caught in process.on
//     console.log("the exception was caught.")
// });

// Domain (exception handling method);

var domain = require("domain")

// let d = domain.create();

// d.run(function(){
//     fs.readFile("","utf8",(err,data)=>{
//         if(err){
//             throw err;
//         }
//         console.log(data);
//         d.dispose();
//     })
// })
// d.on("error",(error)=>{
//     console.log("the exception was caught by domain D1.")
// })

// explicit binding of domins...

// var d1 = domain.create();
// var d2 = domain.create();

// d1.run(function () {
//     d2.add(setTimeout(function () {
//         throw new Error("test Error");
//     }, 1000));
// });

// d2.on("error", (error) => {
//     console.log("error handled by domain d2.");
// });

// d1.on("error", (error) => {
//     console.log("error handled by domain d1.");
// });



//async module

var async = require("async");


// setTimeout(function () {
//   console.log("task 1");
// }, 300);

// setTimeout(function () {
//   console.log("task 2");
// }, 200);

// setTimeout(function () {
//   console.log("task 3");
// }, 100);

// /// Executing async function in Series..

// // series() method takes two params = series( param1 = [function(callbacks)...] , param 2 = function(callbacks));

// // console.log(async)                                             // to check properties of async object

// //Simple case..
// async.series(
//   [
//     (callback) => {
//       setTimeout(() => {
//         console.log("task 1 : series 1");
//         callback(null, 1);
//       }, 300);
//     },
//     (callback) => {
//       setTimeout(() => {
//         console.log("task 2: series 1");
//         callback(null, 2);
//       }, 200);
//     },
//     (callback) => {
//       setTimeout(() => {
//         console.log("task 3: series 1");
//         callback(null, 3);
//       }, 100);
//     }
//   ],
//   (err, result) => {
//     console.log(result);
//   }
// )

// // Handling error case....
// async.series(
//   [
//     (callback) => {
//       setTimeout(() => {
//         console.log("task 1: series 2");
//         callback(new Error("Problem in task 1"), 1);
//       }, 100)
//     },
//     (callback) => {
//       setTimeout(() => {
//         console.log("task 2: series 2");
//         callback(null, 2);
//       }, 200)
//     }
//   ],
//   (err, result) => {
//     if (err) {
//       console.log(err.toString());   // once find error, don't execute after functions...
//     } else {
//       console.log(result)
//     }
//   });


// execution in parallel...

// async.parallel(
//   {
//     one: (callback) => {
//       setTimeout(() => {
//         console.log("task 1: parallel 1");
//         callback(null, 1);
//       }, 300)
//     },
//     two: (callback) => {
//       setTimeout(() => {
//         console.log("task 2: parallel 1");
//         callback(null,2);
//       }, 200)
//     },
//     three: (callback) => {
//       setTimeout(() => {
//         console.log("task 3: parallel 1");
//         callback(null, 2);
//       }, 100)
//     }
//   },
//   (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(result)
//     }
//   }
// )


// Limiting parallelism...

// async.parallelLimit(
//   {
//     one: (callback) => {
//       setTimeout(() => {
//         console.log("task 1: parallel 1");
//         callback(null, 1);
//       }, 300)
//     },
//     two: (callback) => {
//       setTimeout(() => {
//         console.log("task 2: parallel 1");
//         callback(null, 2);
//       }, 200)
//     },
//     three: (callback) => {
//       setTimeout(() => {
//         console.log("task 3: parallel 1");
//         callback(null, 2);
//       }, 100)
//     }
//   },
//   2,    // limit 
//   (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(result)
//     }
//   }
// )
// we can clearly see in the output that , task 1 and task 2 completed before task 3 even though its timer has the smallest delay.
// this indicates that task 3 does not begin to execute until one of the first two tasks completed...


// The waterfall method....


async.waterfall(
  [
    function(callback){
      callback(null,Math.random(),Math.random());
    },
    function(a,b,callBack){
      callBack(null,a*a+b*b);
    },
    function(cc,callBack){
      callBack(null,Math.sqrt(cc));
    }
  ],
  function(err,c){
    console.log(c)
  }
)

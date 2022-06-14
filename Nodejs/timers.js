
// // setTimeOut();

// setTimeout(function(foo,bar){
//     console.log(foo+ " " + bar);
// },1000, "foo","bar");

// function after(a,b){
//     console.log(a+b);
// };
// setTimeout(after,1000,2,3)   // ways to provide arguments to calback inside setTimeout();

//setInterval();

// setInterval((str)=>{      // keeps on printing hello in every 1 sec periodically
//     console.log(str);
// },1000,"hello");

// to stop interval from runnng infinitely we use unref() and to go back to default behaviour use ref()

// var interval=setInterval(()=>{
//     console.log("Interval 2 , terminates using unref()")
// },1000);
// // interval.ref()
// // interval.unref();

// interval
// interval.unref()
// interval.ref()



// setImmediate().....

// setTimeout(()=>{
//     console.log("this is cb timeout")
// },1000);
// setImmediate(()=>{
//     console.log("this will execute immidiately don't wait for SetTimeout() to complete execution");
// });

// spllitting up long running task Susing setImmediate..

// function compute(){     /// long running task 
//     for(var i =0 ; i < 10000000000; i++){
//         console.log(i);
//     }
// }

// compute()
// console.log("finished compute()")

// refactor this problem 

// var i =0 ;

// function compute(){
//     if(i<100000000){
//         console.log(i);
//         i++;
//         setImmediate(compute);
//     }
// }
// compute();

//promise in javascript
//promises basically give us the idea that Something(whatever we are performing) is succesfull or got rejected.
// mostly promises are used with db calls or interacting with public servers etc.(Async/await);

// promise takes 2 input parameters ==> 1. resolve 2. reject

// to use a promise ==> retun new Promise((methods)=>{
// })



let p = new Promise((resolve,reject)=>{
    a= 1+2;
    if(a==2){
        resolve("Success");  // passing one parameter in resolve method
    }else{
        reject("Failed");
    }
})

// then ard catch are extensively used in promises,....... 
p.then((message)=>{
    console.log(`this is in the then block : ${message}`); // if promise get success it will go into the then block
}).catch((message)=>{
    console.log(`this is in the catch block: ${message}`); // if it got rejected , it will go into catch block
})

// promise is a replacement for callbacks 
// promises are used as an alternative for callbacks to avoid the nesting of callback functions.
// callback inside of a callback inside of a callback is known as callback hell.

// what is Promise.all()
// if we have created multiple promises and want to run the all at the same time, then we Use Promise.all()..
 let promise1 = new Promise((resolve,reject)=>{
     resolve("success 1");
 })
 let promise2 = new Promise((resolve,reject)=>{
     resolve("success 2");
 })
 let promise3 = new Promise((resolve,reject)=>{
     resolve("success 3");
 })

 Promise.all([            // here promise.all() will return an array with all the messages.
     promise1,
     promise2,
     promise3
 ]).then((message)=>{
     console.log(message)  
 })

 // if we want promise to return message for the first promise executed between all we can use Promise.race()..
 // for example=>  if one promise is taking time to get execute(in case of DB call , etc..), so the Promise.race() will not wait for the long promise to return message and it will return mesage for the promise which executes first.

 Promise.race([
    promise1,
    promise2,
    promise3
 ]).then((message)=>{
     console.log(message)    // print success 1 only 
 })
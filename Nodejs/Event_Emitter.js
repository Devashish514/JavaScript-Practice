var events = require("events");
var emitter = new events.EventEmitter();    // event emitter instance.

// emitter.on("start", () => {
//     console.log("start");
// });
// emitter.emit("start");


// emitter.addListener("userAdded", (username, password) => {
//     console.log("Welcome, " + username + " ;");
// });

// var username = "jack";
// var password = "F*ck You Amber";

// emitter.emit("userAdded", username, password);
// // emitter.emit("userAdded", username, password);

// // one time Event listeners..

// emitter.once("click",(message)=>{
//     console.log(message);
// });

// var message="Hello"

// emitter.emit("click",message);
// emitter.emit("click",message);


// EventEmitter.listenersCount();

// var emitter2 = new events.EventEmitter();

// emitter2.on("foo",function(){});
// emitter2.on("foo",function(){});

// console.log(EventEmitter.listenerCount(emitter,"click"))
// console.log(EventEmitter.listenerCount(emitter2,"foo"));


// var EventEmitter = events.EventEmitter;                 // another way of creatring event emitter insatnce...
// var newEmitter = new EventEmitter();

// newEmitter.on("foo",function(){
//     console.log("In foo Handler");
// });
// // console.log(newEmitter.listeners("foo"))             // return array of all event handlers

// newEmitter.listeners("foo").forEach((handler)=>{          // iterate over array elements
//     handler();
// });


// emitter.on("button",function handler(){
//     console.log("handling the button");
// });
// function handler(){
//     console.log("hovering");
// }
// emitter.on("hover",handler)
// emitter.emit("button");
// emitter.emit("hover");

// emitter.removeListener("hover",handler)
// emitter.emit("hover")


// removeListneres() function not support anonymous function..
// example

// emitter.on("click",function(){
//     console.log('anonymous function')
// });

// emitter.removeListener("click",function(){
//     console.log('anonymous function')
// })
// emitter.emit("click")  // prints "anonymous"...  which is incorrect case


// inheriting from eventEmitter ...
// traditional appraoch

// var EventEmitter= events.EventEmitter;
// var util = require("util");

// function userEventEmitter(){
//     EventEmitter.call(this);
//     this.addUser = function(username,password){

//         this.emit("userAdded",username,password);
//     };
// };

// util.inherits(userEventEmitter,EventEmitter);

// var user = new userEventEmitter();
// var username= "colin";
// var password = "password";

// user.on("userAdded",function(username,password){
//     console.log("Added user "+ username);
// })
// user.addUser(username,password);
// console.log(user instanceof EventEmitter);


// class approach.                             (not working, check later..)

// var EventEmitter =  events;

// class userEventEmitter extends EventEmitter{      // inheritance
//     constructor(){
//         EventEmitter.call(this);
//         this.addUser=function(username,password){
//             this.emit("userAdded",username,password);
//         }
//     }
// }

// var user = new userEventEmitter();
// var username= "coin"
// var password = "base";

// user.on("userAdded",function(username,password){
//     console.log("AddedUser "+username);
// });

// user.addUser("userAdded",username,password)

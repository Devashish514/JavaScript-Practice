
// // Array.shift()
// function arrayshift(array){
//     return console.log(array.shift())
// }
// const arr= [1,2,3,4,5]
// arrayshift(arr)
// console.log(arr) //--> [2,3,4,5]
// //output--> 1
// // array.shift() remove the first element and returns it.


// //array.unshift()
// function arrayunshift(array){
//     return console.log(array.unshift(4,6,7))
// }
// arrayunshift([4,7,8,91,23])
// //output-->8
// //array.unshift() adds one or more elements and return the new length of array.

// function arrayJoin(array){
//     return console.log(array.join(" "))
// }
// arrayJoin(arr)
// // array.join() is used to concat all elements of array and returns as a string.

// // array.fill()
// //Syntax: fill. (fill-Valiue, StartIndex, EndIndex)
// // fill values from startindex to endindex-1....
// //if no endindex or start index given .... fill all the array.
// function arrayFill(array){
//     return console.log(array.fill(0,3,8))
// }
// arrayFill([3,4,5,2,3,45,67,87,98,109,543,1234])

// // array.concat()..
// function arrayConcat(array1,array2){
//     return console.log(array1.concat(array2))
// }

// let array3= arrayConcat([1,2,3,4,5],[6,7,8,9,10]) 


//Array.find()..
//Arrow Function USe
// function arrayFind(array){
//     return console.log(array.find(element=>element>40));
// }

// //Traditional Functional USe
// // function arrayFind(array){
// //     return console.log(array.find(function test(a){
// //         return a>10
// //     }))
// // }
// arrayFind([2,5,6,8,4,16,30,35,40,45,6,7])

// Array.find() or array.findIndex() are used to return the first element(index of that element) that satifies the provided testing function...

// // Array.findIndex()..

// function arrayFindIndex(array){
//     return console.log(array.findIndex(a=>a>40))
// }
// arrayFindIndex([2,5,6,8,4,16,30,35,40,45,6,7])

// Array.flat()
// syntax: 1. array.flat() 2. array.flat(depth)
// #depth: upto how deep a nested array structure should be flattened.. default is 1

// function flattenArray(array){
//     return console.log(array.flat(3))
// }

// flattenArray([12,45,[[[[12,45,6,7]]]]]) //output--> [ 12, 45, [ 12, 45, 6, 7 ] ]
// // flatten upto 3 depth level ....

// //array.at() --> returns item at that index..
// function atIndex(array){
//     return console.log(array.at(2))
// }
// atIndex([12,4,6,7,8,9])
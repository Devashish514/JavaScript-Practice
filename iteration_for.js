// function check(arr){
//     for(let i =0; i<arr.length;i++){
//         for(let j =i; j<arr.length;j++){
//             console.log(`this is ${arr[i]} and this is ${arr[j]}`);
//         }
//     }
// }
// check(["a","b","c","d"]);

//For In loop....
let a = [5,6,7,8];
for(let index in a){
    console.log(`this is value of index ${index}, and this is its value ${a[index]}`)
}
// for in takes index of value inside an array or string...

//for of loop.....
let b =[4,3,2,1];
for(let elemnet of b){
    console.log(elemnet)
}
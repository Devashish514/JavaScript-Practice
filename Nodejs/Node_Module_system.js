var as = require("fs")
// console.log(as)

// file extensions

// require.extensions  is a object which has in built extension features
// we can add more extension to this object ..
// this feature is now deprecated .


// resolving module location...

console.log(require.resolve("../buffer.js"))  
console.log(require.resolve("http"))   


// Module caching... 
console.log(require.cache)
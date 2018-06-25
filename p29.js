function bigIntPow(a,b) {
    var result = BigInt(a)
    for(var i=0; i<b; i++) {
        result = result * BigInt(a)
    }
    return result
}

// var results = []
// for(var i=2; i<101; i++) {
//     for(var j=2; j<101; j++) {
//         let power = Math.pow(i,j)
//         if(!results.includes(power))
//             results.push(power)
//     }
// }

// console.log(Math.pow(100,100))

// console.log(results.length)

// var test = 0n

// console.log(typeof 123n)
// console.log(test + 1n)
// console.log(typeof test)
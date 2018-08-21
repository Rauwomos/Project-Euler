let useful = require('./useful.js')

let i=3

// Just stopped the program after 10 seconds of not finding any new results
while(true) {
    if((i+'').split('').map(x=>useful.factorial(parseInt(x))).reduce((a,b)=>a+b,0) == i) {
        console.log(i)
    }
    i++
}
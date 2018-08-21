let useful = require('./useful.js')

console.time('p100')

// testing from zero I noticed that the total tends to increase by ~5.8284
let total = 21
let prev_total = 21
let difference
while(true) {
    let ceil = Math.ceil(total/Math.SQRT2)
    let floor = Math.floor(total/Math.SQRT2)
    let res = useful.reduceFraction(BigInt(ceil)*BigInt(floor),BigInt(total)*BigInt(total-1))
    if(res[0] == 1n && res[1] == 2n) {
        if(total > 1000000000000)
            break
        difference = total/prev_total
        prev_total = total
        total = Math.floor(total*difference)
    }
    total++
}

console.timeEnd('p100')

console.log('Blue: ' + Math.ceil(total/Math.SQRT2))
console.log('total: ' + total)
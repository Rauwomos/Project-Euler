let useful = require('./useful.js')

function truncate(n) {
    let res = []
    n = (n+'').split('')
    for(i=1; i<n.length; i++) {
        res.push(parseInt((n.slice(0,-i)).join('')))
        res.push(parseInt((n.slice(i)).join('')))
    }
    return res
}

let count = 0
let res = []
let n = 11
while(count<11) {
    if(useful.isPrime(n)){
        if(truncate(n).map(x=>useful.isPrime(x)).every(x=>x)) {
            res.push(n)
            count++
        }
    }
    n+=2
}

console.log(res)
console.log(res.reduce((a,b)=>a+b,0))
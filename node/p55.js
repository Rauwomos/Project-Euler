function isPalandromic(n) {
    n = n + ''
    return n == n.split('').reverse().join('')
}

function isLychrel(n) {
    n = BigInt(n)
    for(var i=0; i<50; i++) {
        let reversed = BigInt((n + '').split('').reverse().join(''))
        n += reversed
        if(isPalandromic(n)) 
            return true
    }
    return false
}

let count = 0
for(var i=0; i<10000; i++) {
    if(!isLychrel(i))
        count++
}

console.log(count)
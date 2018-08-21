let useful = require('./useful')

// expects primes to be already sorted
function extendPrimeList(primes, max) {
    if(max < 2)
        return primes
    if(primes.length == 0 || primes.length == 1)
        primes = [2,3]
    for(let i=primes[primes.length-1]; i<max; i+=2) {
        if(useful.isPrime(i))
            primes.push(i)
    }
    return primes
}

let n = 9
let primes = [2,3]
while(true) {
    if(!useful.isPrime(n)) {
        if(primes[primes.length-1]<n)
            primes = extendPrimeList(primes,n)
        let passes = false
        for(prime in primes) {
            if(Number.isInteger(Math.sqrt((n-primes[prime])/2))) {
                passes = true
                break
            }
        }
        if(!passes) {
            console.log(n)
            break
        }
    }
    n+=2
}
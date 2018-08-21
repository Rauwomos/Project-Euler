// Problem 50
// ==========


//    The prime 41, can be written as the sum of six consecutive primes:

//                           41 = 2 + 3 + 5 + 7 + 11 + 13

//    This is the longest sum of consecutive primes that adds to a prime below
//    one-hundred.

//    The longest sum of consecutive primes below one-thousand that adds to a
//    prime, contains 21 terms, and is equal to 953.

//    Which prime, below one-million, can be written as the sum of the most
//    consecutive primes?

let useful = require('./useful.js')

let primes = useful.extendPrimeList([2],1000000)

let max = undefined
let max_count = 0

console.log(primes.length)
for(let i=0; i<primes.length; i++) {
    let start = 0
    while(primes[start]<primes[i]) {
        let sum = 0
        let count = 0
        for(let j=start; primes[j]<primes[i]; j++) {
            sum += primes[j]
            count++
            if(sum == primes[i]) {
                if(count > max_count) {
                    max = primes[i]
                    max_count = count
                }
                break
            } else if(sum > primes[i]) {
                break
            }
        }
        start++
    }
    if(!(i%2500))
        console.log(i)
}

console.log(max)
console.log(max_count)
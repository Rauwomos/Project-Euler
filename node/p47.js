// Problem 47
// ==========


//    The first two consecutive numbers to have two distinct prime factors are:

//    14 = 2 × 7
//    15 = 3 × 5

//    The first three consecutive numbers to have three distinct prime factors
//    are:

//    644 = 2² × 7 × 23
//    645 = 3 × 5 × 43
//    646 = 2 × 17 × 19.

//    Find the first four consecutive integers to have four distinct prime
//    factors. What is the first of these numbers?

let useful = require('./useful.js')

// Assumes primes contains all primes less than n
function primeFactors(n, primes) {
   let ans = []
   for(let i=0; i<primes.length; i++) {
      if(primes.includes(n)) {
         ans.push(n)
         return ans
      } else if(n%primes[i] == 0) {
         ans.push(primes[i])
         n /= primes[i]
         i--
      }
   }
}

function sort(a,b) {
   return a-b
}

let primes = [2]

let i=10
let count = 0
let inc = 4
let inc_count = 0
let disp = 1
while(true) {
   primes = useful.extendPrimeList(primes,i+1)
   let pf = useful.uniqueMerge(primeFactors(i,primes),sort)
   if(pf.length == 4) {
      if(inc == 4) {
         i -= 4
         inc = 1
         inc_count = 4
      } else {
         count++
         if(count == 4) {
            console.log(i-3)
            break
         }
      }
   } else {
      count = 0
      if(inc == 1) {
          if(inc_count == 0) {
            inc = 4
          } else {
            inc_count-- 
          }
      }
   }
   i+=inc
}
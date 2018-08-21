function isPrime(n) {
    if(n%1 || n<2)
        return false
    if(n%2==0)
        return(n==2)
    if(n%3==0)
        return(n==3)
    var m=Math.sqrt(n)
    for(var i=5; i<=m; i+=6) {
        if(n%i==0)
            return false
        if(n%(i+2) == 0)
            return false
    }
    return true
}

function extendPrimeList(primes, max) {
    if(max < 2)
        return primes
    if(primes.length == 0 || primes.length == 1)
        primes = [2,3]
    for(let i=primes[primes.length-1]+2; i<max; i+=2) {
        if(isPrime(i))
            primes.push(i)
    }
    return primes
}

function uniqueMerge(array, sort) {
    if(array.length === 0)
        return []
    array = [].concat.apply([],array)
    if(sort) {
        array.sort(sort)
    } else {
        array.sort()
    }
    let unique = [array[0]]
    for(let i=1; i<array.length; i++) {
        if(array[i] != unique[unique.length-1])
            unique.push(array[i])
    }
    return unique
}

function greatestCommonDivisor(a,b){
    return b ? greatestCommonDivisor(b, a%b) : a
  }

// modified from https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
function reduceFraction(numerator,denominator){
  let gcd = greatestCommonDivisor(numerator, denominator)
  return [numerator/gcd, denominator/gcd]
}

function factorial(n) {
    if(n < 0)
        return NaN
    if (n == 0 || n == 1)
        return 1
    for (let i=n-1; i>1; i--) {
        n *= i
    }
    return n
}

function isPalindrome(n) {
    n += ''
    return n == n.split('').reverse().join('')
}

module.exports = {
    isPrime,
    uniqueMerge,
    reduceFraction,
    greatestCommonDivisor,
    factorial,
    isPalindrome,
    extendPrimeList
}
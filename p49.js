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

function permutation(x,y,z) {
    x = ('' + x).split('').sort().toString()
    y = ('' + y).split('').sort().toString()
    z = ('' + z).split('').sort().toString()
    if(x == y && y == z) {
        return true
    }
    return false
}

var primes = []

for(i = 1001; i<10000; i+=2) {
    if(isPrime(i)) {
        primes.push(i)
    }
}

for(var i=0; i<primes.length; i++) {
    for(var j=i+2; j<primes.length;j++) {
        for(var k=j+2; k<primes.length; k++) {
            if(primes[k]-primes[j] == primes[j] - primes[i]) {
                if(permutation(primes[i], primes[j], primes[k])) {
                    console.log(primes[i])
                    console.log(primes[j])
                    console.log(primes[k])
                    console.log('-------------------')
                    console.log(''+primes[i]+primes[j]+primes[k])
                    console.log('-------------------')
                }
            }
        }
    }
}

// test1 = 1234
// test2 = 1243
// test3 = 4321

// console.log(permutation(test1,test2,test3))
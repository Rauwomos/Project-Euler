function rotations(string) {
    if (string.length < 2) return [string]
    var rotations = [string]
    var new_rotation = ''
    var old_rotation = string
    while(true) {
        new_rotation = old_rotation.slice(1) + old_rotation.charAt(0)
        if(new_rotation == string) return rotations
        rotations.push(new_rotation)
        old_rotation = new_rotation
    }
}

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

function isTrue(value) {
    return value
}

var primes = [2]

for(i = 3; i<1000000; i+=2) {
    if(isPrime(i)) {
        primes.push(i)
    }
}

var solutions = []

for(i in primes) {
    if(rotations(''+primes[i]).map(x=>isPrime(parseInt(x))).every(isTrue)) {
        solutions.push(primes[i])
    }
}

console.log(solutions.length)
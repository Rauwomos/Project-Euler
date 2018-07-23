function pandigital(a) {
    var digits = (''+a).split('').map(x=>parseInt(x)).sort()
    if(digits[0] != 1)
        return false
    for(var i=1; i<digits.length; i++) {
        if(digits[i] != digits[i-1]+1) {
            return false
        }
    }
    return true
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

var res = []

for(var i=3; i<987654322; i+=2) {
    if(isPrime(i) && pandigital(i)) {
        // so if there is a drop off of results i don't have to wait for it to finish
        console.log(i)
        res.push(i)
    }
}
console.log(res)
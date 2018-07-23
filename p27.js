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

var consective_prime_counter = 0
var max_counter = 0
var max_a = 0
var max_b = 0
var x = 0

for(var a=-1000; a<42; a++) {
    for(var b=2; b<42; b++) {
        if(isPrime(b)) {
            consective_prime_counter = 1
            x = 1
            while(true) {
                if(isPrime(x*x+a*x+b)) {
                    consective_prime_counter++
                    x++
                } else {
                    if(consective_prime_counter > max_counter) {
                        max_counter = consective_prime_counter
                        max_a = a
                        max_b = b
                    }
                    break
                }
            }
        }
    }
}



console.log(max_a)
console.log(max_b)
console.log(max_counter)
console.log('------------------------------')
console.log(max_a*max_b)
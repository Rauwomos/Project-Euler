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

let max = 600851475143
let max2 = Math.ceil(Math.sqrt(max))
if(max2%2 == 0)
    max2++

for(var i=2; i<max; i++){
    if(max%i==0 && isPrime(i)) {
        console.log(i)
    }
}

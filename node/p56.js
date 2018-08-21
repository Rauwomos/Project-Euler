function sumOfDigits(n) {
    return (n + '').split('').reduce((a,b)=>parseInt(a)+parseInt(b),0)
}

function bigIntPow(a,b) {
    var result = BigInt(a)
    for(var i=1; i<b; i++) {
        result = result * BigInt(a)
    }
    return result
}

let max = 0
for(let a=0; a<100; a++) {
    for(let b=0; b<100; b++) {
        let sum = sumOfDigits(bigIntPow(a,b))
        if(sum > max)
            max = sum
    }
}

console.log(max)


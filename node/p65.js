let useful = require('./useful.js')

function generateEulerSequence(length) {
    let ans = [2n]
    for(let i=1n; i<length; i++) {
        ans.push(1n,i*2n,1n)
    }
    while(BigInt(ans.length)!=length) {
        ans.pop()
    }
    return ans
}

function simplyInfiniteFraction(seq) {
    let ans = seq
    let numerator = 1n
    let denominator = seq[seq.length-1]
    let multiplier = NaN
    for(let i=BigInt(seq.length)-2n; i>=0n; i--) {
        multiplier = seq[i] * denominator
        numerator += multiplier
        ;[numerator, denominator] = useful.reduceFraction(numerator, denominator)
        // Flip the fraction
        let temp = denominator
        denominator = numerator
        numerator = temp
    }
    return [denominator, numerator]
}

ans = (''+simplyInfiniteFraction(generateEulerSequence(100n))[0]).split('').map(x=>parseInt(x)).reduce((a,b)=>a+b,0)
console.log(ans)
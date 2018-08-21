function generateDivisors(n) {
    let divisors = []
    for(let i=Math.ceil(n/2); i>0; i--) {
        if(n%i == 0)
            divisors.push(i)
    }
    return divisors
}

let abundant = []

for(let i=1; i<28124; i++) {
    if(generateDivisors(i).reduce((a,b)=>a+b,0)>i)
        abundant.push(i)
}

console.log(abundant.length)

let cannot = 0

for(let i=1; i<28124; i++) {
    let found = false
    for(j in abundant) {
        if(abundant[j]>i)
            break
        if(abundant.includes(i - abundant[j])) {
            found = true
            break
        }
    }
    if(!found)
        cannot += i
}

console.log(cannot)
function generateDivisors(n) {
    let divisors = []
    for(let i=Math.ceil(n/2); i>0; i--) {
        if(n%i == 0)
            divisors.push(i)
    }
    return divisors
}

function infoSort(a,b) {
    if(a.divisors == b.divisors)
        return a.i-b.i
    else return a.divisors - b.divisors
}

let info = []

for(let i=1; i<10000; i++) {
    info.push({
        i,
        divisors: generateDivisors(i).reduce((a,b)=>a+b,0)
    })
}

info.sort(infoSort)

// Remove primes. Not sure if they don't count?
info = info.filter(x=>x.divisors>1)

let total = 0

for(let i=0; i<info.length; i++) {
    for(let j=0; j<info.length; j++) {
        if(i != j && info[i].divisors == info[j].i && info[j].divisors == info[i].i)
            total += info[i].i
    }
}

console.log(total)
const fs = require('fs')

function nthTriangle(n) {
    return n*(n+1)/2
}

function isTriangular(n) {
    let sqrt = Math.sqrt(n*2)
    let lower = Math.floor(sqrt)
    let upper = Math.ceil(sqrt)
    if(lower!= upper && lower*upper == n*2)
        return true
    return false
}

function isTriangleWord(s) {
    if(isTriangular(s.split('').map(x=>x.charCodeAt(0)-64).reduce((a,b)=>a+b,0))) {
        return 1
    }
    return 0
}

let ans = fs.readFileSync('../Files/words.txt', 'utf-8').split(',').map(x=>isTriangleWord(x.slice(1,-1))).reduce((a,b)=>a+b,0)
console.log(ans)
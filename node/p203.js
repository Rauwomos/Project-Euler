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

function generateSquarePrimes(max) {
    let squarePrimes = [4]
    for(i=3; i**2<max; i+=2) {
        if(isPrime(i))
            squarePrimes.push(i**2)
    }
    return squarePrimes
}

function generateBinomialTriangle(rows) {
    if(rows < 1)
        return []
    let triangle = [[1]]
    // For each row in the triangle
    for(let i=1; i<rows; i++) {
        let row = [1]
        // Generate new row
        for(let j=1; j<i; j++) {
            row.push(triangle[i-1][j-1]+triangle[i-1][j])
        }
        row.push(1)
        triangle.push(row)
    }
    return triangle
}

// Assumes array is sorted
function unique(array) {
    for(let i=1; i<array.length; i++) {
        if(array[i] == array[i-1]) {
            array.splice(i,1)
            i--
        }
    }
    return array
}

let triangle = generateBinomialTriangle(51).reduce((acc, val) => acc.concat(val), []).sort((a,b)=>a-b)

triangle = unique(triangle)

let squarePrimes = generateSquarePrimes(triangle[triangle.length-1]+1)

for(let i=0; i<triangle.length; i++) {
    for(let j=0; j<squarePrimes.length; j++) {
        if(!(triangle[i]%squarePrimes[j])) {
            triangle.splice(i,1)
            i--
            break
        }
    }
}

console.log(triangle.reduce((a,b)=>a+b,0))



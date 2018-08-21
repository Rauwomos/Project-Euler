// Problem 48
// ==========


//    The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

//    Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

let total = 0n
for(let i=1n; i<1001n; i++) {
    total += i**i
}

console.log((total+'').slice(-10))
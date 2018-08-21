function pandigital(a) {
    var digits = a.split('').map(x=>parseInt(x)).sort()
    if(digits[0] != 1)
        return false
    for(var i=1; i<digits.length; i++) {
        if(digits[i] != digits[i-1]+1) {
            return false
        }
    }
    return true
}

let previous = 1n
let current = 2n
let next = 3n
let count = 3

let s = []

while(true) {
    // Calculate next number in sequence
    next = current + previous
    previous = current
    current = next
    count++

    s = current+''
    if(pandigital(s.slice(0,9))) {
        if(pandigital(s.slice(-9))) {
            console.log(current)
            console.log('Count: ' + count)
        }
    }
    if(!(count%1000))
        console.log('Current Count: ' + count)

}
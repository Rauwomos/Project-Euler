function pandigital(a, max) {
    var digits = a.split('').map(x=>parseInt(x)).sort()
    if(digits[0] != 1 || digits.length != max)
        return false
    for(var i=1; i<digits.length; i++) {
        if(digits[i] != digits[i-1]+1) {
            return false
        }
    }
    return true
}

let max = 0

for(let i=99999; i>0; i--) {
    let n=1
    let digits = i+''
    while(digits.length<9) {
        n++
        digits += (i*n)+''
    }
    if(pandigital(digits,9)) {
        if(parseInt(digits) > max) {
            max = parseInt(digits)
        }
    }
}

console.log(max)
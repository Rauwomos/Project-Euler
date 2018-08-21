const fs = require('fs')

// ----------------------------------------------------------------

let ROMAN_NUMERALS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

// Takes any number represented using roman numberals and converts it to a decimal number
// Does not check that the roman number is valid
function romanToDecimal(n) {
    let digits = n.split('').map((a)=>ROMAN_NUMERALS[a])
    
    digits = digits.map((a,b,c)=>{
        // if last item don't check next
        if(b == c.length)
            return a
        // if it less than the next value, negate it
        if(a < c[b+1])
            return -a
        return a
    })
    return digits.reduce((a,b)=>a+b,0)
}

// Converts a number to roman numberals in its minimal form
// Modified from http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function decimalToRoman (num) {
    if (!+num)
        return NaN;
    var digits = (''+num).split(''),
        key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
               '','I','II','III','IV','V','VI','VII','VIII','IX'],
        roman = '',
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
}


// ----------------------------------------------------------------

let input = fs.readFileSync('../Files/roman.txt','utf-8').split('\r\n')

let answer = 0

for(i in input) {
    answer += input[i].length - decimalToRoman(romanToDecimal(input[i])).length
}

console.log(answer)
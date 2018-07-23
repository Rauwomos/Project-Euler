// takes array of numbers and returns true if together they are pandigital, where max is the range of digits eg. 9 is 1-9
function pandigital(a, max) {
    var digits = [].concat.apply([], a.map(x=>(x+'').split(''))).map(x=>parseInt(x)).sort()
    if(digits[0] != 1 || digits.length != max)
        return false
    for(var i=1; i<digits.length; i++) {
        if(digits[i] != digits[i-1]+1) {
            return false
        }
    }
    return true
}

function spandigital(a) {
    var digits = (''+a).split('').map(x=>parseInt(x)).sort()
    if(digits[0] != 1)
        return false
    for(var i=1; i<digits.length; i++) {
        if(digits[i] != digits[i-1]+1) {
            return false
        }
    }
    return true
}

var products = []

for(var i=1; i<9999999; i++) {
    for(var j=1; j<9999999; j++) {
        var num = (''+i+j+(i*j))
        if(num.length>9)
            break
        if(num.length==9) {
            if(spandigital(num)) {
                if(!products.includes(i*j))
                    products.push(i*j)
            }    
        }
    }
}
console.log(products)
console.log(products.reduce((a,b) => a+b,0))
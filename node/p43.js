// Problem 43
// ==========


//    The number, 1406357289, is a 0 to 9 pandigital number because it is made
//    up of each of the digits 0 to 9 in some order, but it also has a rather
//    interesting sub-string divisibility property.

//    Let d[1] be the 1^st digit, d[2] be the 2^nd digit, and so on. In this
//    way, we note the following:

//      • d[2]d[3]d[4]=406 is divisible by 2
//      • d[3]d[4]d[5]=063 is divisible by 3
//      • d[4]d[5]d[6]=635 is divisible by 5
//      • d[5]d[6]d[7]=357 is divisible by 7
//      • d[6]d[7]d[8]=572 is divisible by 11
//      • d[7]d[8]d[9]=728 is divisible by 13
//      • d[8]d[9]d[10]=289 is divisible by 17

//    Find the sum of all 0 to 9 pandigital numbers with this property.


function permute(input, permArr,usedChars) {
    permArr = permArr || []
    usedChars = usedChars || []
    let i, ch
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0]
        usedChars.push(ch)
        if (input.length == 0) {
            permArr.push(usedChars.slice())
        }
        [dump,usedChars] = permute(input, permArr, usedChars)
        input.splice(i, 0, ch)
        usedChars.pop()
    }
    return [permArr,usedChars]
}

function isSpecial(arr) {
    let primes = [null,2,3,5,7,11,13,17]
    for(let i=1; i<8; i++) {
        if(parseInt(arr.slice(i,i+3).join(''))%primes[i])
            return false
    }
    return true
}

let perms = permute([0,1,2,3,4,5,6,7,8,9])[0]

// Not sure why this doesn't work
let res = perms.reduce((a,b)=>isSpecial(b)?(a+parseInt(b.join(''))):a,0)

// let res = perms.map(x=>isSpecial(x)?parseInt(x.join('')):0)

console.log(res)
// console.log(res.reduce((a,b)=>a+b,0))
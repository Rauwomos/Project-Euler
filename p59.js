var fs = require('fs')
// 97-122 inclusive

function isTrue(value) {
    return value
}

console.time('cipher')

file = fs.readFileSync('p59_cipher.txt', 'utf-8').split(',').map(x=>parseInt(x))
var key = []
var max = 0
var best = [] 

for(var i=97; i<123; i++) {
    for(var j=97; j<123; j++) {
        for(var k=97; k<123; k++) {
            var decryptedFile = []
            for(var n=0; n<file.length-file.length%3; n+=3) {
                decryptedFile.push(file[n]^i)
                decryptedFile.push(file[n+1]^j)
                decryptedFile.push(file[n+2]^k)
            }
            if(file.length%3 == 1){
                decryptedFile.push(file[file.length-1]^i)
            }
            if(file.length%3 == 2) {
                decryptedFile.push(file[file.length-2]^i)
                decryptedFile.push(file[file.length-1]^j)
            }
            if(decryptedFile.map(x=>x>31 && x<127).every(isTrue)){
                var ascii = decryptedFile.map(x => String.fromCharCode(x)).join('')
                if((ascii.match(/the/g) || []).length > max) {                    
                    key = [i,j,k]
                    max = (ascii.match(/the/g) || []).length
                    best = decryptedFile
                }
            }
        }
    }
}

// var ascii = best.map(x => String.fromCharCode(x)).join('')

// console.log(max)
// console.log(key)
// console.log('Key: ' + key.map(x => String.fromCharCode(x)).join(''))
// console.log(ascii)
console.log(best.reduce((a,b) => a+b,0))

console.timeEnd('cipher')

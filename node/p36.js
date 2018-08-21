let useful = require('./useful.js')

let sum = 0
for(i=1; i<1000000; i++) {
    if(useful.isPalindrome(i) && useful.isPalindrome(i.toString(2))){
        sum += i
    }
}

console.log(sum)
const fs = require('fs')

// Doing it this way because I'm on a plane and forgot how to convert to char codes
const alphabet = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function stringScore(s) {
	return s.split('').map(x=>alphabet.indexOf(x)).reduce((a,b)=>a+b,0)
}

let names = fs.readFileSync('../Files/names.txt','utf-8').split(',').map(x=>x.slice(1,-1)).sort().map((x,i)=>stringScore(x)*(i+1)).reduce((a,b)=>a+b,0)

console.log(names)
// test = ['a','b','c']

// test.map((x,i)=>console.log(x + ' ' + i))
// Takes too long

let base = 519432n
let exponent = 525806n
let total = 519432n
for(var i=1; i<exponent; i++) {
	total *= base
	if(!(i%1000))
		console.log(i)
}

console.log(total)
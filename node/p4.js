function isPalandrome(n) {
	return n == parseInt((n+'').split('').reverse().join(''))
}

let max = 0

for(var i=999; i>99; i--) {
	for(var j=i; j>99; j--) {
		if(isPalandrome(i*j) && i*j>max)
			max = i*j
	}
}

console.log(max)
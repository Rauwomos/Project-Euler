let sum = 0

for(var i=0; i<1000; i++) {
	if(!(i%3) || !(i%5))
		sum += i
}

console.log(sum)
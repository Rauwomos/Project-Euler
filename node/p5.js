function divisible(n) {
	for(var i=19; i>1; i--) {
		if(n%i)
			return false
	}
	return true
}

let number = 20

while(!divisible(number))
	number+=20

console.log(number)

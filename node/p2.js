let prev = 1
let current = 2
let next = 3

let sum = 0

while(current < 4000000) {
	if(!(current%2))
		sum += current
	next = prev + current
	prev = current
	current = next
}
console.log(sum)
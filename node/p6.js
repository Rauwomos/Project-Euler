let sumsquare = 0
let squaresum = 0

for(var i=1; i<=100; i++) {
	sumsquare += i*i
	squaresum += i
}
squaresum *= squaresum
console.log(squaresum-sumsquare)
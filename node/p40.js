let d = ''
let n = 1

while(d.length<1000000) {
	d += n+''
	n++
}
console.log(parseInt(d[1-1])
	* parseInt(d[10-1])
	* parseInt(d[100-1])
	* parseInt(d[1000-1])
	* parseInt(d[10000-1])
	* parseInt(d[100000-1])
	* parseInt(d[1000000-1]))

let count = 0

for(i=2; i<10000000; i++) {
    let n=i
    while(n!=1 && n!=89) {
        n = parseInt((n+'').split('').map(x=>parseInt(x)**2).reduce((a,b)=>a+b,0))
    }
    if(n==89) {
        count++
    }
    if(!(i%1000000))
        console.log(i)
}
console.log(count)

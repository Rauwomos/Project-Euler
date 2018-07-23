function simplifications(a,b) {
    var results = []
    var x = (a + '').split('').map(n => parseInt(n))
    var y = (b + '').split('').map(n => parseInt(n))
    if(x[1] == 0 || y[1] == 0) {
        return []
    }
    if(x[0] == y[0])
        results.push([x[1],y[1]])
    if(x[0] == y[1])
        results.push([x[1],y[0]])
    if(x[1] == y[0])
        results.push([x[0],y[1]])
    if(x[1] == y[1])
        results.push([x[0],y[0]])
    return results
}

var results = []
var sresults = []

for(var j=11; j<100; j++) {
    for(var i=j-1; i>9; i--) {
        var simp = simplifications(i,j)
        if(simp.length) {
            for(var k in simp) {
                if(simp[k][0]/simp[k][1] == i/j) {
                    results.push([i,j])
                    sresults.push(simp[k])
                }
            }
        }
    }
}

var nom = 1
var den = 1
for(var i in sresults) {
    nom = nom * sresults[i][0]
    den = den * sresults[i][1]
}

console.log(nom + '/' + den)


console.log(results)
console.log(sresults)
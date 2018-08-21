var fs = require('fs')

// returns valid coordinates where step is the current distance from start and n is the size of the matrix
function stepCoordinates(step, n) {
    if(step>(n-1)*2 || step < 0) {
        return []
    }
    // x+y=step
    // 0<=x<n
    // 0<=y<n
    var coordinates = []
    // if the diagonal is on the second half
    if(step > n-1) {
        // starting coordinate
        var x = step - n
        var y = n
        for(var i=0; i<n*2-step-1; i++) {
            x++
            y--
            coordinates.push([x,y])
        }
    } else {
        // starting coordinate
        for(var i=0; i<=step; i++) {
            let x = i
            let y = step-i
            coordinates.push([x,y])
        }
    }
    return coordinates
}

// returns up to two coordinates that could feed into the provided one
function previousCoordinates(coordinate, n) {
    let coordinates = []
    if(coordinate[0] == n-1 && coordinate[1] == n-1)
        return []
    if(coordinate[0] == n-1)
        return [[n-1,coordinate[1]+1]]
    if(coordinate[1] == n-1)
        return [[coordinate[0]+1,n-1]]
    return [[coordinate[0],coordinate[1]+1], [coordinate[0]+1,coordinate[1]]]
}

var matrix = fs.readFileSync('p81_matrix.txt','utf-8').split('\n').map(x=>x.split(',').map(y=>parseInt(y)))

// for testing
// var test = [[1,2,2,4],[2,3,3,5],[3,4,4,7],[4,5,6,7]]
// for(i in matrix) {
//     console.log(matrix[i])
// }
// console.log()

var n = matrix.length
for(var i=(n-1)*2-1; i>=0; i--) {
    var steps = stepCoordinates(i,n)
    for(step in steps) {
        let children = previousCoordinates(steps[step],n)
        for(child in children) {
            children[child] = matrix[children[child][0]][children[child][1]] + matrix[steps[step][0]][steps[step][1]]
        }
        matrix[steps[step][0]][steps[step][1]] = Math.min(...children)
    }
}

// for(i in matrix) {
//     console.log(matrix[i])
// }
console.log(matrix[0][0])
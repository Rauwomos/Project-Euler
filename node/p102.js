// Strategy is to move in on direction and count how many lines of the triangle it intersects.
// 1 -> contains origin
// 2 -> doens't contain, unless points are identical

const fs = require('fs')

// returns intersect point of lines A and B. Assumes they are not parrallel
function intersect(coordA1,coordA2,coordB1,coordB2) {
    let mA = (coordA1[1]-coordA2[1])/(coordA1[0]-coordA2[0])
    let cA = coordA1[1] - mA*coordA1[0]

    let mB = (coordB1[1]-coordB2[1])/(coordB1[0]-coordB2[0])
    let cB = coordB1[1] - mB*coordB1[0]

    let x = (cB-cA)/(mA-mB)
    let y = mA*(cB-cA)/(mA-mB)+cA
    return [x,y]
}

// returns true if intersect exists between coordinates 1 and 2. Assumes intersect is on line formed by two points
function validIntersect(coord1, coord2, intersect) {
    if(intersect[0] > coord1[0] && intersect[0] > coord2[0])
        return false
    else if(intersect[0] < coord1[0] && intersect[0] < coord2[0])
        return false
    return true
}

let triangles = fs.readFileSync('../Files/triangles.txt','utf-8').split('\r\n').map(x=>x.split(',').map(y=>parseInt(y))).map(x=>[[x[0],x[1]],[x[2],x[3]],[x[4],x[5]]])

let contains = 0

for(i in triangles) {
    let intersects = [intersect(triangles[i][0],triangles[i][1],[0,0],[1,0]),
                    intersect(triangles[i][1],triangles[i][2],[0,0],[1,0]),
                    intersect(triangles[i][2],triangles[i][0],[0,0],[1,0])]
    let valid = [validIntersect(triangles[i][0],triangles[i][1],intersects[0]),
                validIntersect(triangles[i][1],triangles[i][2],intersects[1]),
                validIntersect(triangles[i][2],triangles[i][0],intersects[2])]
    
    let intersect_count = 0
    for(i in intersects) {
        if(valid[i] && intersects[i][0] > 0 && intersects[i][0] < 1000)
            intersect_count++
    }
    if(intersect_count%2) {
        contains++
    }
}

console.log(contains)
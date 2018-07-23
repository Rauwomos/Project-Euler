function traingleNumbers(max) {
    let numbers = []
    let number = 0
    let n = 0
    while (number < max) {
        number += n
        numbers.push(number)
        n++
    }
    return numbers
}

function g(goal) {
    let tri = traingleNumbers(goal)
    console.log(tri.length)
    let count = 0

    for(a in tri) {
        if(tri[a] > goal)
            break
        for(b in tri) {
            if(tri[a] + tri[b] > goal)
                break
            if(tri.includes(goal - tri[a] - tri[b]))
                count++
        }
    }

    return count
}

console.log(g(1e7))
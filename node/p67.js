const fs = require('fs')

function hasDuplicates(array) {
    return (new Set(array)).size == array.length;
}

function solve(err, data) {
    // If there was an error, stop
    if(err)
        throw err

    // Parse input file into array of sorted arrays of numbers, one line per array
    var input = data.split('\n').map(row => row.split(' ').map(v=>+v))

    for(i=input.length-2; i>=0; i--) {
        for(j=0;j<input[i].length; j++) {
            input[i][j] += Math.max(input[i+1][j], input[i+1][j+1])
        }
    }

    // Print the answer
    console.log(input[0][0])
}

fs.readFile('67.txt', 'utf-8', solve)
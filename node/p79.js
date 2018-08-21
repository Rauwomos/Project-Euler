// Was intially stuck until I was informed that each character only appears once...

let fs = require('fs')
let useful = require('./useful')

let input = fs.readFileSync('../Files/keylog.txt', 'utf-8').split('\r\n').map(x=>x.split(''))

let rels = []

// Generates a list of relationships
for(i in input) {
    for(let j=1; j<input[i].length; j++) {
        rels.push({
            'before': input[i][j-1],
            'after': input[i][j]
        })
    }
}

// Output password
let pass = []

// List of all possible characters
let pos = useful.uniqueMerge(input)

while(pos.length) {
    for(i in rels) {
        pos = pos.filter(x=>x!==rels[i].after)
        if(pos.length == 1)
            break
    }
    pass.push(pos[0])
    rels = rels.filter(x=>x.before!==pos[0])
    pos = useful.uniqueMerge(input).filter(x=>!pass.includes(x))
}

console.log(pass.join(''))
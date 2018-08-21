// Does long division between two integers. Return repeating section only if applicable
function longDiv(numerator, denominator) {
    if(Number.isInteger(numerator/denominator))
        return {integer: numerator/denominator, decimal: '', repeating: false}
    let answer = {
        integer: 0,
        decimal: '',
        repeating_decimal: '',
        repeating: null
    }
    let workspace = []
    if(numerator > denominator) {
        workspace.push({
            result: Math.floor(numerator/denominator),
            remainder: numerator%denominator
        })
    } else {
        workspace.push({
            result: 0,
            remainder: numerator
        })
    }
    let repeating = false
    while(!repeating && workspace[workspace.length-1].remainder != 0) {
        let x = workspace[workspace.length-1].remainder * 10
        workspace.push({
            result: Math.floor(x/denominator),
            remainder: x%denominator
        })
        if(workspace.length > 2){
            for(let i=1; i<workspace.length-1; i++) {
                if(workspace[i].result == workspace[workspace.length-1].result && workspace[i].remainder == workspace[workspace.length-1].remainder) {
                    repeating = true
                    workspace.pop()
                    for(let j=i; j<workspace.length; j++) {
                        answer.repeating_decimal += workspace[j].result
                    }
                    break
                }
            }
            
        }
    }
    let decimal = ''
    for(let i=1; i<workspace.length; i++)
        decimal+=workspace[i].result
    answer.integer = workspace[0].result
    answer.decimal = decimal
    answer.repeating = repeating
    return answer
}

let max = 0;
let max_length = 0;
for(let i=1; i<1000; i++) {
    let res = longDiv(1,i)
    if(res.repeating && res.repeating_decimal.length > max_length) {
        max = i
        max_length = res.repeating_decimal.length
    }
}

console.log(max)
console.log(max_length)
console.log(longDiv(1,max))
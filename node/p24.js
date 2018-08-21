// Modified from https://stackoverflow.com/questions/9960908/permutations-in-javascript
function permute(input, permArr,usedChars) {
  permArr = permArr || []
  usedChars = usedChars || []
  let i, ch
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]
    usedChars.push(ch)
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    [dump,usedChars] = permute(input, permArr, usedChars)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  return [permArr,usedChars]
}

console.log(permute([0,1,2,3,4,5,6,7,8,9])[0][999999].join(''))
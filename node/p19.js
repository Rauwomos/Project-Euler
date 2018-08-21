var date = new Date('1900-1-6')

let total = 0
while(date.getFullYear()<2000) {
    date.setDate(date.getDate()+7)
    if(date.getDate() == 1) {
        console.log(date)
        total++
    }
}

console.log(total)

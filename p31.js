// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

var two_pounds, one_pound, fifty_p, twenty_p, ten_p, five_p, two_pm, one_p;

var counter = 0;

sum = () => {
    return two_pounds*200 + one_pound*100 + fifty_p*50 + twenty_p*20 + ten_p*10 + five_p*5 + two_p*2 + one_p
}

for(two_pounds=0; two_pounds<2; two_pounds++) {
    for(one_pound=0; one_pound<3; one_pound++) {
        for(fifty_p=0; fifty_p<5; fifty_p++) {
            for(twenty_p=0; twenty_p<11; twenty_p++) {
                for(ten_p=0; ten_p<21; ten_p++) {
                    for(five_p=0; five_p<41; five_p++) {
                        for(two_p=0; two_p<101 ;two_p++) {
                            for(one_p=0; one_p<201; one_p++) {
                                let res = sum()
                                if(res == 200) {
                                    counter++
                                } else if(res > 200) {
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(counter)
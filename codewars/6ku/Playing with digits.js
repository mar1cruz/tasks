function digPow(n, p) {
    const digit = numCalculation(n, p)
    return digit % n === 0 ? digit / n : -1
}


function numCalculation(n, p) {
    let result = 0
    for (const el of n.toString()) {
        result += el ** p++
    }
    return result
}

console.log(digPow(46288, 3))

//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
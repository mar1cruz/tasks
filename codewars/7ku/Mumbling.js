function accum(s) {
    let result = []

    s.toLowerCase().split('').forEach((symbol, index) => {
        let part = symbol.toUpperCase() + symbol.repeat(index)
        result.push(part)
    })

    return result.join('-');
}

console.log(accum('ZpglnRxqenU'))

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
    let result = []

    s.toLowerCase().split('').forEach((symbol, index) => {
        let part = symbol.toUpperCase() + symbol.repeat(index)
        result.push(part)
    })

    return result.join('-');
}

console.log(accum('ZpglnRxqenU'))
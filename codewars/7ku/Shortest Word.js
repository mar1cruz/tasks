function findShort(s) {
    const words = s.split(' ');
    let size = words[0].length

    words.forEach(word => word.length < size ? size = word.length : size)

    return size
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
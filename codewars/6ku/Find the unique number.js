function findUniq(arr) {
    const filtered = arr.filter(el => el !== arr[0])
    return filtered.length === 1 ? filtered[0] : arr[0]
}

console.log(findUniq([1, 0, 0]))

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
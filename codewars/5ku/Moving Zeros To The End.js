function moveZeros(arr) {
    const noZero = arr.filter(el => el !== 0)
    const zero = arr.filter(el => el === 0)
    return [...noZero, ...zero]
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
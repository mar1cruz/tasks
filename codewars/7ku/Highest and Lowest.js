function highAndLow(numbers) {
  const num = numbers
    .split(" ")
    .map((n) => +n)
    .sort((a, b) => b - a);
  return `${num[0]} ${num[num.length - 1]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function descendingOrder(n) {
  return +("" + n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(descendingOrder(1021));

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

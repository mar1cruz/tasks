const arr = [1, 2, 3, 4, 5];

console.log(
  arr
    .slice()
    .sort((a, b) => a - b)
    .join(",")
);
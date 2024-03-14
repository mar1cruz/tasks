function tribonacci(signature, n) {
  if (!n) return [];
  if (n === 1) return signature;
  for (let i = signature.length; i < n; i++) {
    signature[i] = signature.slice(-3).reduce((acc, item) => acc + item, 0);
  }

  return signature;
}

console.log(tribonacci([1, 1, 1], 10));

//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

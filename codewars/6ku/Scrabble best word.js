function getBestWord(points, words) {
  const resObj = {};
  let count = 0;
  let index = 0;

  for (let i = 0; i < words.length; i++) {
    count = 0;

    for (let j = 0; j < words[i].length; j++) {
      index = words[i][j].charCodeAt() - 65;
      count += points[index];

      if (j === words[i].length - 1) resObj[words[i]] = count;
    }
  }

  const sortedWords = Object.entries(resObj).sort((a, b) => b[1] - a[1]);
  const filteredWords = sortedWords.filter((w) => w[1] === sortedWords[0][1]);
  return filteredWords.reduce((acc, item) => {
    if (acc.length < item.length) return acc;
  }, "");
}

var points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
var simpleWords = ["JGPCWVWFW", "JXHNKBJJG"];

console.log(getBestWord(points, simpleWords));

//https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript

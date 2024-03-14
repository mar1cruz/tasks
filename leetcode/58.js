var lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && length === 0) break;
    if (s[i] !== " ") length++;
  }
  return length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
//https://leetcode.com/problems/length-of-last-word/

var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) stack.push(s[i]);
    else {
      const lastItem = stack.pop();
      if (s[i] !== brackets[lastItem]) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("([())"));

//https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (pairs[char]) {
      // 左括号，将对应的右括号入栈
      stack.push(pairs[char]);
    } else {
      // 右括号，检查是否与栈顶元素匹配
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log("1");
isValid("([)]"); // false

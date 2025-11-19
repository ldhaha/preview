/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  path = path.split("/");
  for (let s of path) {
    // 多个/会分割出'',.没用
    if (s === "" || s === ".") {
      continue;
    }
    if (s === ".." && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
};

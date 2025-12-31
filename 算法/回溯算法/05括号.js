/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            res.push(current);
            return;
        }
        // 决策1：添加左括号（如果还有剩余）
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // 决策2：添加右括号（如果右括号数量小于左括号数量）
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }
    backtrack('', 0, 0)
    return res;
};
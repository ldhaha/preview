/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const res = [];
    const digitsMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    function backtrack(index, path) {
        if (index === digits.length) {
            res.push(path);
            return;
        }
        const digit = digits[index];
        const letter = digitsMap[digit]
        for (let i = 0; i < letter.length; i++) {
            backtrack(index + 1, path + letter[i])
        }
    }
    backtrack(0, '');
    return res;
};

letterCombinations("23")
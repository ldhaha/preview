/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = s.split(' ');
    return res.reverse().join(' ')
};
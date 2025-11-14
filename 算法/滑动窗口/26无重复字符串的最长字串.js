/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let left = 0;
    let newStr = ''
    for (let r = 0; r <= s.length; r++) {
        if (newStr.includes(s[r])) {
            while (newStr.includes(s[r])) {
                left++;
                newStr = s.slice(left, r + 1)
            }
        } else {
            newStr = s.slice(left, r + 1);
            max = Math.max(max, r - left + 1)
        }
        r++;
    }
    console.log(max);
    return max;
};

lengthOfLongestSubstring("abcabcbb")
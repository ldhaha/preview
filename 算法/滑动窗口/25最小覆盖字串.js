/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let min = Infinity;
    let minRight = 0
    for (let right = 0; right < s.length; right++) {
        let new_str = s.slice(left, right + 1);
        while (new_str.includes(t)) {
            if ((right + 1 - left) < min) {
                min = right + 1 - left;
                minRight = right + 1
            }
            left++;
            new_str = s.slice(left, right + 1);
        }

    }
    console.log(s.slice(minRight - min, minRight))
    return s.slice(minRight - min, minRight);
};


minWindow("ADOBECODEBANC", "ABC");
var longestCommonPrefix = function (strs) {
    let res = ''
    if (!strs[0]) {
        return ''
    } else {
        for (let i = 0; i < strs[0].length; i++) {
            if (strs.every(item => item.startsWith(strs[0].slice(0, i + 1)))) {
                res = strs[0].slice(0, i + 1);
            } else {

                break
            }
        }
    }
    return res;

};
longestCommonPrefix(["flower", "flow", "flight"])
var romanToInt = function (s) {
    let res = 0;
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const specialMap = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
    for (let i = 0; i < s.length; i++) {
        if (`${s[i]}${s[i + 1]}` in specialMap) {
            res += specialMap[`${s[i]}${s[i + 1]}`];
            i++;
        } else {
            res += map[s[i]]
        }
    }
    console.log(res)
};
romanToInt("DC")
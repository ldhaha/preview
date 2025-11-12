/**
 * @param {number} num
 * @return {string} 1994
 */
var intToRoman = function (num) {
    let res = '';
    const length = `${num}`.length;
    const commonFunction = (zs, one, five, nine) => {
        let str = '';
        if (zs <= 5) {
            if (zs === 5) {
                str = five
            } else {
                if (zs === 4) {
                    str = `${one}${five}`;
                } else {
                    str = new Array(zs).fill(one).join('');
                }

            }
        } else {
            if (zs < 9) {

                str = `${five}${new Array(zs - 5).fill(one).join('')}`
            } else {
                str = nine
            }
        }
        return str;
    }
    for (let i = length - 1; i >= 0; i--) {
        const zs = Math.trunc(num / Math.pow(10, i));
        if (i === 3) {
            res += new Array(zs).fill('M').join('');
        } else if (i === 2) {
            res += commonFunction(zs, 'C', 'D', 'CM');
        } else if (i === 1) {
            res += commonFunction(zs, 'X', 'L', 'XC');
        } else {
            res += commonFunction(zs, 'I', 'V', 'IX');
        }
        num = num - Math.pow(10, i) * zs;
    }
    return res;
};

console.log(intToRoman(3749));
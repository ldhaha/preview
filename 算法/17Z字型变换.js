/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *  P   A   H   N
    A P L S I I G
    Y   I   R
 */

[["P", "", "A", "", "H", "", "N"],
["A", "P", "L", "S", "I", "I", "G"],
["Y", "", "I", "", "R", "", ""]]


var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let column = 0;
    const period = 1 + numRows - 2;
    const periodCount = numRows + numRows - 2;
    const zs = Math.trunc(s.length / periodCount);
    column = zs * period;
    const ys = s.length % periodCount;
    if (ys > numRows) {
        column += 1 + (ys - numRows);
    } else {
        column += 1;
    }
    const arr = [];
    for (let i = 0; i < numRows; i++) {
        arr[i] = new Array(column).fill('');
    }
    let i = 0;
    let row = 0;
    let diff = -1;
    while (i < s.length) {
        for (let col = 1; col <= column; col++) {
            if (col % period === 1) {
                if (row === 0) {
                    for (let r = 0; r < numRows && i < s.length; r++) {
                        arr[r][col - 1] = s[i];
                        i++;
                        row = r;
                        diff = -1;
                    }
                } else {
                    for (let r = row; r >= 0 && i < s.length; r--) {
                        arr[r][col - 1] = s[i];
                        i++;
                        row = r;
                        diff = 1;
                    }
                }

            } else {
                arr[row][col - 1] = s[i];
                i++
            }
            row = row + diff;
        }
    };
    return arr.map(item => item.join('')).join('').replace(/\s+/g, '');
}
convert("A", 1);

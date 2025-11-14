var summaryRanges = function (nums) {
    if (nums.length === 1) return [nums[0].toString()];
    const res = [];
    let str = `${nums[0]}`;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            if (!str.includes('>')) {
                str += '->'
            }
            if (i === nums.length - 1) {
                res.push(str + nums[i]);
            }
        } else {
            if (str.includes('>')) {
                str += nums[i - 1];
                res.push(str);
            } else {
                res.push(nums[i - 1].toString());
            }
            str = `${nums[i]}`
            if (i === nums.length - 1) {
                res.push(str)
            }

        };
    }
    return res;
}


summaryRanges([0, 2, 3, 4, 6, 8, 9])
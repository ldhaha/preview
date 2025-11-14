var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    if(intervals.length === 1) return intervals;
    console.log('sorted intervals', intervals);
    let current = intervals[0];
    const res = [];
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i + 1][0] >= current[0] && intervals[i + 1][0] <= current[1] && intervals[i + 1][1] >= current[1]) {
            console.log('下一个区间与current有交集', current, intervals[i + 1]);
            current = [current[0], intervals[i + 1][1]];
            if (i === intervals.length - 2) {
                res.push(current);
            }
        } else if (current[1] >= intervals[i + 1][0] && current[1] >= intervals[i + 1][1]) {
            console.log('current覆盖下一个区间', current, intervals[i + 1]);
            if (i === intervals.length - 2) {
                res.push(current);
            }
        } else {
            res.push(current);
            current = intervals[i + 1];
            if (i + 1 === intervals.length - 1) {
                res.push(current);
            }
        }
    }
    console.log('res', res);
    return res;
};
insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
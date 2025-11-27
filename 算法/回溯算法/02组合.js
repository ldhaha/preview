var combine = function (n, k) {
    const res = [];

    function backtrack(start, current) {
        if (current.length === k) {
            res.push([...current]); // 复制当前组合
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i); // 选择当前数字
            backtrack(i + 1, current); // 递归，从下一个数字开始
            current.pop(); // 撤销选择（回溯）
        }
    }

    backtrack(1, []); // 从1开始，初始为空数组
    return res;
};

combine(10, 7)

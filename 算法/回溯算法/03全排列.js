/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function (nums) {
    const result = [];

    const backtrack = (path, used) => {
        // 终止条件：当前路径长度等于原始数组长度
        if (path.length === nums.length) {
            result.push([...path]); // 深拷贝当前路径
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 如果当前数字已经被使用，跳过
            if (used[i]) continue;

            // 做选择
            used[i] = true;
            path.push(nums[i]);

            // 递归进入下一层
            backtrack(path, used);

            // 撤销选择（回溯）
            path.pop();
            used[i] = false;
        }
    };

    backtrack([], []);
    return result;
};
permute([1, 2, 3]);
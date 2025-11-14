/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 排序：首先对数组进行排序，这样便于使用双指针和去重
遍历：固定第一个数 nums[i]，然后在剩下的数组中使用双指针寻找另外两个数
双指针：
left 从 i+1 开始，向右移动
 */
var threeSum = function (nums) {
    // 先对数组进行排序
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 双指针
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                // 找到满足条件的三元组
                result.push([nums[i], nums[left], nums[right]]);

                // 跳过重复的left
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // 跳过重复的right
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (total < 0) {
                left++; // 和太小，左指针右移
            } else {
                right--; // 和太大，右指针左移
            }
        }
    }

    return result;
};
console.log(threeSum([-2, 0, 1, 1, 2]))
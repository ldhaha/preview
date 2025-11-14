function minSubArrayLen(target, nums) {
    let left = 0; // 窗口左边界
    let sum = 0;  // 当前窗口的和
    let minLength = Infinity; // 最小长度，初始设为无穷大

    for (let right = 0; right < nums.length; right++) {
        // 扩展右边界
        sum += nums[right];

        // 当窗口和满足条件时，尝试收缩左边界
        while (sum >= target) {
            // 更新最小长度
            minLength = Math.min(minLength, right - left + 1);
            // 收缩左边界
            sum -= nums[left];
            left++;
        }
    }

    // 如果没找到符合条件的子数组，返回0
    return minLength === Infinity ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
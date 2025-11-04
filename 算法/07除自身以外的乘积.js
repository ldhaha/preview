function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // 第一步：answer[i] 存储左边所有元素的乘积
    answer[0] = 1;  // 第一个元素左边没有元素
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    // 此时 answer = [1, 1, 2, 6]

    // 第二步：从右往左，用变量 R 累积右边乘积
    let R = 1;  // 最后一个元素右边没有元素
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;  // 左边乘积 * 右边乘积
        R = R * nums[i];           // 更新右边乘积
    }

    return answer;
}
/**
 * 示例 1：

输入：nums1 = [4，5，6,0,0,0], m = 3, nums2 = [1，2，3], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

思路，k为总长度，从后开始放,比较从第一个和第二个最后开始取，比较num2和num1谁大，大的就先放，下标--再去比较，
如果最后i走完了，但是j没走完·   就直接把j放到k的位置
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = nums2.length - 1;
    let k = m + n - 1;
    console.log(i, j, k)
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }

    console.log(nums1)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
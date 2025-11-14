var findMinArrowShots = function (points) {
    if (points.length <= 1) return points.length;

    // 按结束坐标排序，而不是开始坐标
    points.sort((a, b) => a[1] - b[1]);

    let arrow = 1; // 至少需要一支箭
    let currentEnd = points[0][1]; // 第一支箭的位置

    for (let i = 1; i < points.length; i++) {
        // 如果当前气球的开始坐标大于当前箭的位置，需要新的箭
        if (points[i][0] > currentEnd) {
            arrow++;
            currentEnd = points[i][1]; // 更新箭的位置为当前气球的结束坐标
        }
        // 否则当前箭可以射破这个气球，继续检查下一个
    }

    return arrow;
};

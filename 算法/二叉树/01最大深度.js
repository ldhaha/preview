var maxDepth = function (root) {
    if (root === null) return 0;
    const lengthLeft = maxDepth(root.left);
    const lengthRight = maxDepth(root.right);
    return Math.max(lengthLeft, lengthRight) + 1;
};
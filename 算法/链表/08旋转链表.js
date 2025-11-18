var rotateRight = function (head, k) {
    if (!head || k === 0) return head;

    // 计算链表长度
    let len = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        len++;
    }

    // 连接成环
    current.next = head;

    // 找到新的尾节点（倒数第 k%len + 1 个节点）
    let steps = len - (k % len);
    let newTail = head;

    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }

    // 新头节点是尾节点的下一个
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
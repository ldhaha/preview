function hasCycle(head) {
    // 如果链表为空或只有一个节点，肯定无环
    if (!head || !head.next) {
        return false;
    }

    let slow = head;  // 慢指针，每次走一步
    let fast = head;  // 快指针，每次走两步

    // 快指针没走到链表末尾就继续
    while (fast && fast.next) {
        slow = slow.next;          // 慢指针走一步
        fast = fast.next.next;     // 快指针走两步

        // 如果两个指针相遇，说明有环
        if (slow === fast) {
            return true;
        }
    }

    // 快指针走到链表末尾，说明无环
    return false;
}
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let pre = 0;
    while (l1 || l2) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + pre;
        if (sum >= 10) {
            pre = 1;
            current.next = new ListNode(sum - 10);
        } else {
            pre = 0;
            current.next = new ListNode(sum);
        }
        l1 = l1?.next;
        l2 = l2?.next;
        current = current.next;
    }
    if (pre) {
        current.next = new ListNode(pre)
    }
    return dummy.next
};
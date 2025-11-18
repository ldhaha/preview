
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
    [3,5]  [1,2]
 */
var reverseBetween = function (head, left, right) {
    const data = [];
    let count = 1;
    let current = head;
    let pre = head;
    let last = null;
    while (count <= right && current) {
        if (count === left - 1) {
            pre = current;
        }
        if (count >= left && count <= right) {
            data.push(new ListNode(current.val));
            last = current.next;
        }
        current = current.next;
        count++;
    }
    data.reverse();
    current = head;
    for (let node of data) {
        pre.next = node;
        pre = node;
    };
    pre.next = last;
    return left === 1 ? head.next : head;
};

reverseBetween(new ListNode(1, new ListNode(2, new ListNode(3))), 3, 3)
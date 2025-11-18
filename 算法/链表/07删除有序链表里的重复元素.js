/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0);
    let current = dummy;
    const map = new Map();
    while (head) {
        const data = map.get(head.val) || [];
        data.push(head.val);
        map.set(head.val, data);
        head = head.next;
    };
    for (const value of map.values()) {
        if (value.length === 1) {
            current.next = new ListNode(value[0]);
            current = current.next;
        }
    }
    return dummy.next;
}


deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))))))
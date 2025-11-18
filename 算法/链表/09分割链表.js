/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const data1 = [];
    const data2 = [];
    let dummy = new ListNode(0);
    let current = dummy;
    while (head) {
        if (x > head.val) {
            data1.push(head.val)
        } else {
            data2.push(head.val);
        }
        head = head.next
    }
    [...data1, ...data2].forEach(item => {
        current.next = new ListNode(item);
        current = current.next;
    })
    return dummy.next;
};
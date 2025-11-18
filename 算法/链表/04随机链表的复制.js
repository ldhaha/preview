var copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    const map = new Map();
    let current = head;
    while (current) {
        map.set(current, new _Node(current.val));
        current = current.next;
    }
    current = head;
    while (current) {
        const copyNode = map.get(current);
        if (current.next) {
            copyNode.next = map.get(current.next)
        }
        if (current.random) {
            copyNode.random = map.get(current.random)
        }
        current = current.next;
    }
    return map.get(head)
};
// @leet start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    const oldToCopy = new Map();
    oldToCopy.set(null, null);

    let cur = head;
    while (cur) {
        const copy = new _Node(cur.val);
        oldToCopy.set(cur, copy);
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        const copy = oldToCopy.get(cur);
        copy.next = oldToCopy.get(cur.next);
        copy.random = oldToCopy.get(cur.random);
        cur = cur.next;
    }

    return oldToCopy.get(head);
};
// @leet end

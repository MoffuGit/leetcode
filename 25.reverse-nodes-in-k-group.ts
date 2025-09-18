// @leet start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const temp = new ListNode(0, head);
    let groupHead = temp;

    while (true) {
        const tail = getGroupTail(groupHead, k);
        if (!tail) {
            break;
        }
        const nextGroupHead = tail.next;

        let prev = tail.next;
        let curr = groupHead.next;
        while (curr != nextGroupHead) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        const tmp = groupHead.next;
        // groupHead.next = tail;
        groupHead = tmp;
    }
    return temp.next;
};
function getGroupTail(curr: ListNode, k: number): ListNode | null {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}
// @leet end

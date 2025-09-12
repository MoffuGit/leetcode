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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const temp = new ListNode(-1, head);

    let left = temp
    let right = head;

    while (n > 0) {
        right = right.next;
        n--;
    }

    while (right) {
        right = right.next
        left = left.next
    }
    left.next = left.next.next
    return temp.next
};
// @leet end

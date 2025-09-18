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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists || !lists.length) {
        return null
    }

    return divide(lists, 0, lists.length - 1)
};

function divide(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
    if (left > right) {
        return null;
    }

    if (left === right) {
        return lists[left];
    }

    const mid = Math.floor(left + (right - left) / 2);
    const leftNode = divide(lists, left, mid);
    const rightNode = divide(lists, mid + 1, right);
    return join(leftNode, rightNode);
}

function join(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const temp = new ListNode();
    let curr = temp;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1 ? list1 : list2;
    return temp.next;
}
// @leet end

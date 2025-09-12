// @leet start
//recursion
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let newHead = head;
    if (head.next) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }
    head.next = null;

    return newHead;
};
//iteration
// function reverseList(head) {
//         let prev = null;
//         let curr = head;
//
//         while (curr) {
//             let temp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = temp;
//         }
//         return prev;
//     }
// @leet end

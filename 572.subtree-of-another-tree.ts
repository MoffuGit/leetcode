// @leet start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return false;
    }

    if (!subRoot) {
        return true;
    }

    if (sameTree(root, subRoot)) {
        return true
    }

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

function sameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root || !subRoot) {
        return root === subRoot;
    }

    if (root.val !== subRoot.val) {
        return false
    }

    return (
        sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
    )
}
// @leet end

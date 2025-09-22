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

function kthSmallest(root: TreeNode | null, k: number): number {
    let res = 0;

    function dfs(node: TreeNode | null): void {
        if (!node) {
            return
        }

        dfs(node.left);
        k--;

        if (k === 0) {
            res = node.val
            return;
        }

        dfs(node.right)
    }

    dfs(root);

    return res;
};
// @leet end

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

function maxPathSum(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let res = root.val;
    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }

        let left = Math.max(dfs(node.left), 0)
        let right = Math.max(dfs(node.right), 0)
        res = Math.max(res, left + right + node.val);
        return Math.max(left, right) + node.val
    }

    dfs(root);

    return res;
};
// @leet end

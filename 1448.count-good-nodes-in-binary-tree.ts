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

function goodNodes(root: TreeNode | null): number {
    let res = 0;

    if (!root) {
        return res;
    }

    function dfs(node: TreeNode | null, prev: number): void {
        if (!node) {
            return
        }

        if (node.val >= prev) {
            res++;
            prev = Math.max(prev, node.val);
        }


        dfs(node.left, prev);
        dfs(node.right, prev);
    }

    dfs(root, root.val);

    return res;
};
// @leet end

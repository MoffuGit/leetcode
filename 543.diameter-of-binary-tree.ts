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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = [0];
    dfs(root, res);
    return res[0];
};

function dfs(node: TreeNode | null, res: number[]): number {
    if (!node) {
        return 0;
    }

    let left = dfs(node.left, res);
    let right = dfs(node.right, res);
    res[0] = Math.max(res[0], left + right);
    return 1 + Math.max(left, right);
}
// @leet end

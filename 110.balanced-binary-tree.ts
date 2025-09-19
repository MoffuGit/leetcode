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

function isBalanced(root: TreeNode | null): boolean {
    let res = [true];
    dfs(root, res);
    return res[0];
};

function dfs(node: TreeNode | null, res: boolean[]): number {
    if (!node) {
        return 0;
    }

    let left = dfs(node.left, res);
    let right = dfs(node.right, res);
    if ((Math.abs(left - right) > 1)) {
        res[0] = false;
        return 0;
    }
    return 1 + Math.max(left, right);
}
// @leet end

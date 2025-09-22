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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preIdx = 0
    let inIdx = 0

    function dfs(limit: number): TreeNode | null {
        if (preIdx >= preorder.length) return null;

        if (inorder[inIdx] === limit) {
            inIdx++;
            return null
        }

        let root = new TreeNode(preorder[preIdx++]);
        root.left = dfs(root.val);
        root.right = dfs(limit);
        return root
    }

    return dfs(Infinity)
};
// @leet end

// @leet start
function subsets(nums: number[]): number[][] {
    let res: number[][] = [];
    let curr: number[] = []

    function dfs(idx: number): void {
        if (idx >= nums.length) {
            res.push([...curr])
            return
        }
        curr.push(nums[idx]);
        dfs(idx + 1);
        curr.pop()
        dfs(idx + 1)
    }

    dfs(0)

    return res
};
// @leet end

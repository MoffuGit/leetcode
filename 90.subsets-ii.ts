// @leet start
function subsetsWithDup(nums: number[]): number[][] {
    nums.sort()

    let res: number[][] = [];
    let curr: number[] = []

    function dfs(start: number): void {
        res.push([...curr])
        for (let idx = start; idx < nums.length; idx++) {
            if (idx > start && nums[idx] === nums[idx - 1]) {
                continue
            }
            curr.push(nums[idx])
            dfs(idx + 1)
            curr.pop()
        }
    }

    dfs(0)

    return res
};
// @leet end

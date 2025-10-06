// @leet start
function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = []
    let curr: number[] = []

    function dfs(idx: number, target: number): void {
        if (target === 0) {
            res.push([...curr])
            return
        }
        if (idx >= candidates.length || target < 0) {
            return
        }

        curr.push(candidates[idx])

        dfs(idx, target - candidates[idx])
        curr.pop()
        dfs(idx + 1, target)
    }

    dfs(0, target)

    return res;
};
// @leet end

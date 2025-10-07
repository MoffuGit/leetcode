// @leet start
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort()
    let res: number[][] = []
    let curr: number[] = []

    function dfs(idx: number, target: number): void {
        if (target === 0) {
            res.push([...curr])
            return
        }

        if (target < 0 || idx > candidates.length) {
            return
        }

        curr.push(candidates[idx])
        dfs(idx + 1, target - candidates[idx])
        curr.pop()
        while (
            idx + 1 < candidates.length &&
            candidates[idx] === candidates[idx + 1]
        ) {
            idx++;
        }
        dfs(idx + 1, target)
    }

    dfs(0, target)

    return res;
};
// @leet end

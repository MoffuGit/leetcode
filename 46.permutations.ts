// @leet start
function permute(nums: number[]): number[][] {
    let res: number[][] = []
    let curr: number[] = []
    let pick: boolean[] = new Array(nums.length).fill(false)

    function perm(): void {
        if (curr.length === nums.length) {
            res.push([...curr])
            return
        }

        for (let idx = 0; idx < nums.length; idx++) {
            if (!pick[idx]) {
                curr.push(nums[idx])
                pick[idx] = true
                perm()
                curr.pop()
                pick[idx] = false
            }
        }
    }

    perm()

    return res
};
// @leet end

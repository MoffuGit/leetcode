// @leet start
function jump(nums: number[]): number {
    let idx = 0;
    let max = 0;
    let last = 0;
    let jumps = 0;

    while (last < nums.length - 1) {
        max = Math.max(max, idx + nums[idx])
        if (idx === last) {
            last = max;
            jumps++
        }
        idx++
    }

    return jumps

};
// @leet end

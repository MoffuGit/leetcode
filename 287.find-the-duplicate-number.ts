// @leet start
function findDuplicate(nums: number[]): number {
    for (let num of nums) {
        let idx = Math.abs(num) - 1;
        if (nums[idx] < 0) {
            return Math.abs(num);
        }
        nums[idx] *= -1;
    }
    return -1;
};
// @leet end

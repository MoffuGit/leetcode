// @leet start
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];

    let currSum = 0;

    for (let num of nums) {
        if (currSum < 0) {
            currSum = 0
        }
        currSum += num;
        maxSum = Math.max(maxSum, currSum)
    }

    return maxSum
};
// @leet end

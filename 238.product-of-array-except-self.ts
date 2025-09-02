// @leet start
function productExceptSelf(nums: number[]): number[] {
    let length = nums.length;

    let res = new Array(length).fill(1)

    for (let i = 1; i < length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let postfix = 1;
    for (let i = length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i]
    }
    return res
};
// @leet end

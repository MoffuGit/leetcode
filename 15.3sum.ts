// @leet start
function threeSum(nums: number[]): number[][] {
    let numbers = nums.sort((a, b) => a - b);
    let res: number[][] = [];
    let target = 0;

    for (let idx = 0; idx < numbers.length; idx++) {
        if (idx > 0 && numbers[idx] === numbers[idx - 1]) {
            continue
        }
        let left = idx + 1,
            right = numbers.length - 1

        while (left < right) {
            let leftValue = numbers[left];
            let rightValue = numbers[right];
            let idxValue = numbers[idx];
            let sum = leftValue + rightValue + idxValue;

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                res.push([leftValue, rightValue, idxValue]);
                left++;
                right--;
                while (left < right && numbers[left] === numbers[left - 1]) {
                    left++;
                }
            }
        }
    }
    return res;
};
// @leet end

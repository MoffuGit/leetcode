// @leet start
function searchMatrix(matrix: number[][], target: number): boolean {
    let nums = matrix.flat()
    function binarySearch(nums: number[], target: number, left: number, right: number): boolean {
        if (left > right) {
            return false
        }

        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return true
        } else {
            return nums[mid] < target ? binarySearch(nums, target, mid + 1, right) : binarySearch(nums, target, left, mid - 1)
        }
    }

    return binarySearch(nums, target, 0, nums.length - 1)
};
// @leet end

// @leet start
function search(nums: number[], target: number): number {
    function binarySearch(nums: number[], target: number, left: number, right: number): number {
        if (left > right) {
            return -1
        }

        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid
        } else {
            return nums[mid] < target ? binarySearch(nums, target, mid + 1, right) : binarySearch(nums, target, left, mid - 1)
        }
    }

    return binarySearch(nums, target, 0, nums.length - 1)
};
// @leet end

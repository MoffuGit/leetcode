// @leet start
function containsDuplicate(nums: number[]): boolean {
    let map = new Set();
    for (let num of nums) {
        if (map.has(num)) {
            return true
        }

        map.add(num);
    }

    return false
};
// @leet end

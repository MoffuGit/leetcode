// @leet start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
        let need = target - nums[idx];
        let exist = map.get(need);
        if (exist !== undefined) {
            return [exist, idx]
        }
        map.set(nums[idx], idx)
    }
    return [0, 0]
};
// @leet end

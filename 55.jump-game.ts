// @leet start
function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;

    //This don't try to find the "best" path
    //if finds an index that can jump to the current goal,
    //this change the goal to this index,
    //but it does matter if the idx can jump furder
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};
// @leet end

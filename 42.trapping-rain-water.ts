// @leet start
function trap(height: number[]): number {
    let res = 0;
    if (height.length === 0) {
        return res;
    }
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right]

    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            res += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            res += maxRight - height[right];

        }
    }

    return res
};
// @leet end

// @leet start
function largestRectangleArea(heights: number[]): number {
    const length = heights.length;
    let stack: number[] = [];
    let max = 0;

    for (let idx = 0; idx <= length; idx++) {
        while (
            stack.length &&
            (idx === length || heights[stack[stack.length - 1]] >= heights[idx])
        ) {
            let poped = stack.pop();
            if (poped === undefined) {
                return 0;
            }
            const height = heights[poped];
            const width = !stack.length ? idx : idx - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }
        stack.push(idx)
    }
    return max;
};
// @leet end

// @leet start
function dailyTemperatures(temperatures: number[]): number[] {
    let res: number[] = new Array(temperatures.length).fill(0);

    let stack: [number, number][] = [];

    for (let idx = 0; idx < temperatures.length; idx++) {
        const t = temperatures[idx];

        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            let poped = stack.pop();
            if (poped === undefined) {
                continue;
            }
            res[poped[1]] = idx - poped[1];
        }
        stack.push([t, idx]);
    }

    return res;
};
// @leet end

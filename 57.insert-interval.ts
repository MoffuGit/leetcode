// @leet start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let idx = 0;
    let res: number[][] = [];

    while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
        res.push(intervals[idx])
        idx++
    }

    while (idx < intervals.length && newInterval[1] >= intervals[idx][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[idx][0])
        newInterval[1] = Math.max(newInterval[1], intervals[idx][1])

        idx++
    }

    res.push(newInterval)

    while (idx < intervals.length) {
        res.push(intervals[idx])
        idx++;
    }

    return res;
};
// @leet end

// @leet start
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let res: number[][] = []

    res.push(intervals[0])

    for (let interval of intervals) {
        let prevEnd = res[res.length - 1][1]
        let start = interval[0]
        let end = interval[1]

        if (start <= prevEnd) {
            res[res.length - 1][1] = Math.max(prevEnd, end)
        } else {
            res.push(interval)
        }
    }

    return res
};
// @leet end

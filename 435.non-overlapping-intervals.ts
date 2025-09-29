// @leet start
function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1])

    let count = 0;
    let tempEnd = intervals[0][1]

    for (let idx = 1; idx < intervals.length; idx++) {
        let current = intervals[idx];
        if (current[0] >= tempEnd) {
            tempEnd = current[1]
        } else {
            count++
        }
    }

    return count
};
// @leet end

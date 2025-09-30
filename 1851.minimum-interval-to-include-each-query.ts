// @leet start
function minInterval(intervals: number[][], queries: number[]): number[] {
    intervals.sort((a, b) => a[0] - b[0])
    let sortedQueries = [...queries].sort((a, b) => a - b)
    let res: Map<number, number> = new Map();

    let heap: MinPriorityQueue<[number, number]> = new MinPriorityQueue((entry) => entry[0])

    let idx = 0;

    for (let query of sortedQueries) {
        //this move the interval pointer until its find an interval that can't contain the query because they start after the query
        while (idx < intervals.length && intervals[idx][0] <= query) {
            let [left, right] = intervals[idx]
            heap.enqueue([right - left + 1, right])
            idx++;
        }

        //this remove the intervals that can't contain the query because they end before the query
        while (!heap.isEmpty() && heap.front()[1] < query) {
            heap.dequeue();
        }

        res[query] = !heap.isEmpty() ? heap.front()[0] : -1;
    }

    return queries.map((query) => res[query])
};
// @leet end

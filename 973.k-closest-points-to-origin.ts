// @leet start
function kClosest(points: number[][], k: number): number[][] {
    let heap: PriorityQueue<number[]> = new PriorityQueue((a, b) => b[0] - a[0]);

    for (let idx = 0; idx < points.length; idx++) {
        let [x, y] = points[idx];
        let dist = x ** 2 + y ** 2
        heap.push([dist, idx])
        if (heap.size() > k) {
            heap.pop()
        }
    }

    let res: number[][] = []
    while (heap.size()) {
        let [_, idx] = heap.pop();
        res.push(points[idx])
    }

    return res
};
// @leet end

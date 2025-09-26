// @leet start
function findKthLargest(nums: number[], k: number): number {
    let heap: MinPriorityQueue<number> = new MinPriorityQueue();

    for (let num of nums) {
        heap.enqueue(num);
        if (heap.size() > k) {
            heap.dequeue()
        }
    }

    return heap.dequeue()
};
// @leet end

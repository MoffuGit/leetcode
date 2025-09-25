// @leet start
class KthLargest {
    minHeap: MinPriorityQueue<number>
    maxSize: number
    constructor(k: number, nums: number[]) {
        this.maxSize = k;
        this.minHeap = new MinPriorityQueue();

        for (let num of nums) {
            this.minHeap.enqueue(num);
        }

        while (this.minHeap.size() > this.maxSize) {
            this.minHeap.dequeue()
        }
    }

    add(val: number): number {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.maxSize) {
            this.minHeap.dequeue()
        }

        return this.minHeap.front()
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @leet end

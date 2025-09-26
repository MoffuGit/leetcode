// @leet start
class MedianFinder {
    smallHalf: PriorityQueue<number>
    largeHalf: PriorityQueue<number>
    constructor() {
        this.smallHalf = new PriorityQueue((a, b) => b - a)
        this.largeHalf = new PriorityQueue((a, b) => a - b)
    }

    addNum(num: number): void {
        if (this.largeHalf.isEmpty() || num > this.largeHalf.front()
        ) {
            this.largeHalf.enqueue(num)
        } else {
            this.smallHalf.enqueue(num)
        }

        if (this.largeHalf.size() > this.smallHalf.size() + 1) {
            this.smallHalf.enqueue(this.largeHalf.dequeue())
        } else if (this.largeHalf.size() + 1 < this.smallHalf.size()) {

            this.largeHalf.enqueue(this.smallHalf.dequeue())
        }
    }

    findMedian(): number {
        if (this.largeHalf.size() > this.smallHalf.size()) {
            return this.largeHalf.front()
        } else if (this.smallHalf.size() > this.largeHalf.size()) {
            return this.smallHalf.front()
        } else {
            return ((this.smallHalf.front() + this.largeHalf.front()
            ) / 2)
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @leet end

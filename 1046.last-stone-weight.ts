// @leet start
function lastStoneWeight(stones: number[]): number {
    const maxPQ: MaxPriorityQueue<number> = new MaxPriorityQueue();

    for (const stone of stones) {
        maxPQ.enqueue(stone);
    }

    while (maxPQ.size() > 1) {
        const stone1 = maxPQ.dequeue();
        const stone2 = maxPQ.dequeue();

        if (stone1 !== stone2) {
            maxPQ.enqueue(stone1 - stone2);
        }
    }

    return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
};
// @leet end

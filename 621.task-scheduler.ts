// @leet start
function leastInterval(tasks: string[], n: number): number {
    let counts = new Array(26).fill(0);

    for (let task of tasks) {
        counts[task.charCodeAt(0) - "A".charCodeAt(0)]++
    }

    let heap: MaxPriorityQueue<number> = new MaxPriorityQueue()

    for (let count of counts) {
        if (count) {
            heap.push(count);
        }
    }

    let time = 0;
    let queue: Queue<[number, number]> = new Queue();

    while (queue.size() || heap.size()) {
        time++;

        if (heap.size()) {
            let count = heap.pop() - 1
            if (count) queue.push([count, time + n])
        }

        if (queue.size() && queue.front()[1] === time) {
            heap.push(queue.pop()[0])
        }
    }

    return time
};

//NOTE:
//this is supposed to be a better and faster solution but 
//is more math based and i don't think i will remember this on an interview,
//the heap solution is more easy to remember because there are many other 
//problems where you use a heap
//
//const count = new Array(26).fill(0);
// for (const task of tasks) {
//     count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
// }
//
// const maxf = Math.max(...count);
// let maxCount = 0;
// for (const i of count) {
//     if (i === maxf) {
//         maxCount++;
//     }
// }
//
// const time = (maxf - 1) * (n + 1) + maxCount;
// return Math.max(tasks.length, time);
// @leet end

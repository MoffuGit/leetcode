// @leet start
function mergeTriplets(triplets: number[][], target: number[]): boolean {
    let acc: Set<number> = new Set();

    for (let trip of triplets) {
        if (trip[0] > target[0] || trip[1] > target[1] || trip[2] > target[2]) {
            continue;
        }
        for (let idx = 0; idx < trip.length; idx++) {
            if (trip[idx] === target[idx]) {
                acc.add(idx);
            }
        }
    }

    return acc.size === 3
};
// @leet end

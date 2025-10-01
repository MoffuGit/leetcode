// @leet start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let count = 0;
    let start = 0;

    let gasCount = 0;
    let costCount = 0;

    for (let idx = 0; idx < gas.length; idx++) {
        gasCount += gas[idx]
        costCount += cost[idx]
        count += gas[idx] - cost[idx]
        if (count < 0) {
            count = 0
            start = idx + 1;
        }
    }

    return costCount > gasCount ? -1 : start
};
// @leet end

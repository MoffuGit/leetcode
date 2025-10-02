// @leet start
function partitionLabels(s: string): number[] {
    let map: Map<number, number> = new Map();

    for (let idx = 0; idx < s.length; idx++) {
        map[s[idx]] = idx
    }

    let end = 0
    let size = 0;
    let res: number[] = [];
    for (let idx = 0; idx < s.length; idx++) {
        size++
        end = Math.max(end, map[s[idx]])
        if (end === idx) {
            res.push(size);
            size = 0
            end = 0
        }
    }

    return res
};
// @leet end

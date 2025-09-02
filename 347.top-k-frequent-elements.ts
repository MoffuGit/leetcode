// @leet start
function topKFrequent(nums: number[], k: number): number[] {
    let count = {};
    let freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        freq[count[num]].push(parseInt(num));
    }

    let res: number[] = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const num of freq[i]) {
            res.push(num);
            if (res.length === k) {
                return res;
            }
        }
    }
    return [];
};
// @leet end
